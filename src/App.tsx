import React, { useEffect } from 'react';
import Dropdown from 'react-dropdown';
import { CSVLink } from 'react-csv';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { IMonth } from './models/models';
import { getRemainderMonths } from './utils/getRemainderMonths';
import { getMonthFromString } from './utils/getMonthNumber';
import { addMonth } from './store/remainderMonthsSlice';


const salary = [
  { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
];

const headers = [
  { label: 'mounth', key: 'mounth' },
  { label: 'salaryDate', key: 'salaryDate' },
  { label: 'bonusDate', key: 'bonusDate' },
];

function App() {
  const dispatch = useDispatch();
  const remainderMonths = useSelector((state:any) => state.month);
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

  return (
    <div className="container">
       <Dropdown
       className="w-80 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-10"
       menuClassName="py-1 text-base text-gray-700 dark:text-gray-200"
       placeholder="Select an option"
       options={remainderMonths}/>

       <CSVLink
       className="py-4 px-4 bg-white text-blue-700 font-semibold rounded-sm shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-opacity-75 inline-flex items-center"
       data={salary}
       headers={headers}
       filename={'salary.csv'}
       >
         
       </CSVLink>

      
      
     
    </div>
  );
}

export default App;
