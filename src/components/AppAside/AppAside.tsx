import React, { ReactElement, useContext } from 'react'
import { IEmployeeModel } from '../../interfaces'
import { CheckerContext } from '../../providers/CheckerProvider'
import { AppContextInterface } from '../../providers/CheckerProvider'
import { Char } from '../../components/Char/Char'
import { getMonthName } from '../../utils/months'
interface IMonthsGroup {
  [key: string]: IEmployeeModel[]
}

export const AppAside: React.FC = (): ReactElement => {

  const context: AppContextInterface = useContext(CheckerContext)

  const grouped = context.selectedItems.reduce((acc: IMonthsGroup, employee: IEmployeeModel) => {
    acc[getMonthName(employee.dob)] = acc[getMonthName(employee.dob)] || []
    acc[getMonthName(employee.dob)].push(employee);
    return acc
  }, {})

  const isEmpty = !Object.keys(grouped).length

  const renderMonthWithEmployees = () => {
    return (
      <div>
        {
          Object.entries(grouped).map(([month, employees]: [string, IEmployeeModel[]]) => {
            return (
              <Char key={month} char={month} charsEmployees={employees}></Char>
            )
          })
        }
      </div>
    )
  }

  return (
    <div className='aside'>
      <div className="aside__caption">

      </div>
      <div className="aside__content">
        {isEmpty ? 'No selected employees' : renderMonthWithEmployees()}
      </div>
    </div>

  )
}