import React, { useEffect, useState } from 'react';
import Dropdown, { Option } from 'react-dropdown';
import { CSVLink } from 'react-csv';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { IFile, IMonth } from './models/models';
import { getRemainderMonths } from './utils/getRemainderMonths';
import { getMonthFromString } from './utils/getMonthNumber';
import { addMonth } from './store/remainderMonthsSlice';
import { getSalaryDate } from './utils/getSalaryDate';
import { getBonusDate } from './utils/getBonusDate';
import { addFile } from './store/salarySlice';
import { RootState } from './store';


const headers = [
  { label: 'month', key: 'month' },
  { label: 'salaryDate', key: 'salaryDate' },
  { label: 'bonusDate', key: 'bonusDate' },
];

function App() {
  const [salaryValue, setSalaryValue] = useState(false);

  const dispatch = useDispatch();
  const remainderMonths = useSelector((state:RootState) => state.month);
  const salary = useSelector((state:RootState) => state.salary);

  const restOfMounths = getRemainderMonths();

  const months:IMonth[] = restOfMounths.map((m:string)=> {
    return {
        value: getMonthFromString(m),
        label: m,
    };
});

useEffect(() => {
  dispatch(addMonth([{ value: 13, label: 'All mounths' }, ...months]));
}, [dispatch, salary]);

const salaryHandler = (e: IMonth  | any) => {
  console.log('e,',e)
  let output:IFile[];
  if (e.value !== 13) {
      output = [
          {
              month: e.label,
              salaryDate: getSalaryDate(e.value),
              bonusDate: getBonusDate(e.value),
          },
      ];
  } else {
      output = restOfMounths.map((m) => {
          return {
              month: m,
              salaryDate: getSalaryDate(getMonthFromString(m)),
              bonusDate: getBonusDate(getMonthFromString(m)),
          };
      });
  }
  dispatch(addFile(output));
  setSalaryValue(true);
};
console.log('SALARY', salary);

return (
  <div className="container mx-auto">
      <Dropdown
          className="w-80 cursor-pointer mx-auto mt-32 bg-white rounded px-4 py-2 divide-y divide-gray-100 shadow dark:bg-gray-700 dark:text-gray-200"
          menuClassName="py-2 text-base text-gray-700 dark:text-gray-200"
          options={remainderMonths}
          onChange={(e: Option) => salaryHandler(e)}
          placeholder="Select an option"
      />
      {salaryValue && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <CSVLink
                  className="w-60 py-2 px-4 bg-white text-blue-700 font-semibold rounded shadow-md hover:bg-gray-100 divide-y divide-gray-100 shadow dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-75 inline-flex items-center justify-center"
                  data={salary}
                  headers={headers}
                  filename={'salary.csv'}
              >
                  <svg
                      className="fill-current w-4 h-4 mr-2 animate-bounce"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                  >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download CSV</span>
              </CSVLink>
          </div>
      )}
  </div>
);
}

export default App;
