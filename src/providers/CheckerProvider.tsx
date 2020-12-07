import React from 'react'
import { IEmployeeModel } from '../interfaces'
import { IAction } from '../interfaces/Reducer'

export type AppContextInterface = {
  selectedItems: IEmployeeModel[], /* Map<string, any>, */
  setSelectedItems: (action: IAction) => void;
}

export const CheckerContext = React.createContext<AppContextInterface>({
  selectedItems: []/* new Map<string, any>(), */,
  setSelectedItems: (action: IAction) => { },
})

export const AppContextProvider = CheckerContext.Provider
export const AppContextConsumer = CheckerContext.Consumer

export const withAppContext = <P extends Object>(
  Component: any,
): React.FC<P & AppContextInterface> => {
  return (props: any) => {

    return (
      <AppContextConsumer>
        {value => <Component {...props} appContext={value} />}
      </AppContextConsumer>
    );
  };
}