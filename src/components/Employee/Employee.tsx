import React, { ReactElement } from 'react'
import { IEmployeeModel } from '../../interfaces'

type IEmployee = {
  employee: IEmployeeModel
}

export const EmployeeComponent: React.FC<IEmployee> = ({ employee }: IEmployee): ReactElement => {
  return (
    <div >{employee.lastName} {employee.firstName}</div>
  )
}