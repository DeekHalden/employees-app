import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import { Employees } from "../../pages/Employees/Employees";
import { HomePage } from '../../pages/Home/Home'
import { AppAside } from "../AppAside/AppAside";
import './AppContent.sass'

export const AppContent: React.FC = (): ReactElement => {
  return (
    <main className='main'>
      <Switch>
        <Route path='/employees'>
          <div className='content'>
            <div className='content__main'>
              <Employees />
            </div>
            <div className='content__aside'>
              <AppAside />
            </div>
          </div>
        </Route>
        <Route path='/'><HomePage /></Route>
      </Switch>
    </main>
  )
}