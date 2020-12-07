import React, { ReactElement, useContext } from 'react'
import { Char } from '../../components/Char/Char'
import { IEmployeeModel } from '../../interfaces'
import { EmployeesContext, EmployeesContextInterface } from '../../providers/EmployeesProvider'

import './Employees.sass'

export const Employees: React.FC = (): ReactElement => {
  const {employees}: EmployeesContextInterface = useContext(EmployeesContext)
  return (
    <div className='employees'>
      {
        Object
          .entries(employees)
          .map(([char, charsEmployees]: [string, IEmployeeModel[]]) =>
            <Char key={char} char={char} charsEmployees={charsEmployees} />
          )
      }
    </div>
  )
}