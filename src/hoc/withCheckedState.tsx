import React, { useContext, useEffect, useState } from 'react'
import './withCheckerState.sass'

import { IEmployeeModel } from '../interfaces'
import { CheckerContext } from '../providers/CheckerProvider'
import { getMonthName } from '../utils/months'
import { AppContextInterface } from '../providers/CheckerProvider'
import classnames from 'classnames'

type IEmployee = {
  employee: IEmployeeModel
}


export const withCheckedState = <P extends object>(
  Component: any
): React.FC<P & IEmployee> => ({
  ...props
}: IEmployee) => {

    const context: AppContextInterface = useContext(CheckerContext);

    const setSelected = (value: IEmployeeModel): void => {
      context.setSelectedItems({ payload: value })
    }

    const [selectedItem, setSelectedItem] = useState<boolean>(false)

    useEffect(() => {
      setSelectedItem(context.selectedItems.find((s: IEmployeeModel) => s.id === props.employee.id) ? true : false)
    }, [context.selectedItems, props.employee.id])

    // useEffect(() => {
    //   console.log(context)
    // }, [context]);
    return (
      <div className='state-checker'>
        <input
          onChange={() => setSelected(props.employee)}
          type="checkbox" className='control-checkbox state-checker__control'
          checked={selectedItem}
        />
        <Component {...props} />
      </div>
    );
  }

