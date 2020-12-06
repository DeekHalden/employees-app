import React, { useEffect, useReducer, useState } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { AppContent } from './components/AppContent/AppContent';
import { AppHeader } from './components/AppHeader/AppHeader';
import { IEmployeeModel } from './interfaces';
import { IAlphabet } from './interfaces/Alphabet';
import { IAction, IState } from './interfaces/Reducer';
import { AppContextProvider } from './providers/CheckerProvider';
import { EmployeesContextProvider } from './providers/EmployeesProvider';
import { employeesService } from './services';
import { alphabet } from './utils';

const initialSelected = {
  selectedItems: JSON.parse(localStorage.getItem('selectedItems') || '[]')
};


function reducer(state: IState, action: IAction) {
  switch (action.type) {
    default:
      const itemIndex = state.selectedItems.findIndex((item: IEmployeeModel) =>  action.payload.id === item.id) 
      const data = [...state.selectedItems]
      if (itemIndex > -1) {
        data.splice(itemIndex, 1)
      } else {
        data.push(action.payload)
      }
      localStorage.setItem('selectedItems', JSON.stringify(data));
      return {
        selectedItems: data
      }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialSelected);

  const [employees, setEmployees] = useState<IAlphabet>({})

  const fetchEmployees = async (): Promise<IEmployeeModel[]> => {
    try {
      return (await employeesService.getData())
    } catch (error) {
      console.log(error)
      return [];
    }
  }

  const groupElements = (array: IEmployeeModel[]): IAlphabet => {
    return array.reduce((acc: IAlphabet, employee: IEmployeeModel) => {
      acc[employee.lastName.charAt(0).toLocaleLowerCase()].push(employee)
      return acc
    }, alphabet);
  }

  const sortElements = (array: IEmployeeModel[]): IEmployeeModel[] => {
    return array.sort((a: IEmployeeModel, b: IEmployeeModel): number => {
      return a.lastName.localeCompare(b.lastName)
    })
  }

  useEffect(() => {
    fetchEmployees()
      .then(sortElements)
      .then(groupElements)
      .then(setEmployees)
  }, [])

  return (
    <EmployeesContextProvider value={{ employees: employees }}>
      <AppContextProvider value={{ selectedItems: state.selectedItems, setSelectedItems: dispatch }}>
        <div className="app">
          <Router>
            <AppHeader />
            <AppContent />
            
          </Router>
        </div>
      </AppContextProvider>
    </EmployeesContextProvider>
  );
}

export default App;
