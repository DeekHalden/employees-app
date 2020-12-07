import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

import './AppHeader.sass'

export const AppHeader: React.FC = (): ReactElement => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='header__list'>
          <li className='header__list-item'>
            <NavLink exact activeClassName='is-active' className='link link--variant_primary' to='/'>Home</NavLink>
          </li>
          <li className='header__list-item'>
            <NavLink exact activeClassName='is-active' className='link link--variant_primary' to='/employees'>Employees</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}