import React, { ReactElement } from 'react'
import { IEmployeeModel } from '../../interfaces'
import { EmployeeWithCheckedState } from '../Employee'
import './Char.sass'
import classname from 'classnames';

// const className = classname('char__caption')

type CharProps = {
  char: string;
  charsEmployees: IEmployeeModel[]
}

export const Char: React.FC<CharProps> = ({ char, charsEmployees }: CharProps): ReactElement => {

  const employeesLength = charsEmployees.length

  const renderEmployees = (): ReactElement => {
    return (
      <div>
        {
          employeesLength ? <div>{charsEmployees.map((e) => <EmployeeWithCheckedState employee={e} key={e.id}></EmployeeWithCheckedState>)}</div> : <div>-</div>
        }
      </div>
    )
  }
  return (
    <div className='char'>
      <div className={classname('char__caption', { "is-active": employeesLength })}>{char}</div>
      <div className="char__items">{renderEmployees()}</div>
    </div>
  );
}