export interface IMonth {
  value: number, 
  label: string 
}

export interface IFile {
  month: string | number | React.ReactNode,
  salaryDate: string,
  bonusDate: string,
}

export interface IOption {
  label:string |  React.ReactNode;
  value: string;
  className?: string;
  data?: {
    [dataAttribute: string]: string | number
  };
}
