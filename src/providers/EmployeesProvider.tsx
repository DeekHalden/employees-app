import React from 'react'
import { IAlphabet } from '../interfaces/Alphabet'
import { IAction } from '../interfaces/Reducer'

export type EmployeesContextInterface = {
  employees: IAlphabet;
  setEmployees?: (action: IAction) => void;
}

export const EmployeesContext = React.createContext({
  employees: {},
  setEmployees: (action: IAction) => {}
})

export const EmployeesContextProvider = EmployeesContext.Provider;
export const EmployeesContextConsumer = EmployeesContext.Consumer;
