import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import itc__logo from '../assets/itc.png'
import logo from '../img/logo.png'
import { NavLink } from 'react-router-dom'


function Layout() {
  return (
    <>
    <header>

        <img src={itc__logo} alt="" />

        <span>Центр информационных технологий</span>
    </header>

    <Outlet>

    </Outlet>
    <footer>
      <div><img src={logo} alt="" /><span>Архивная служба при Министерстве цифрового развития КР</span></div>
      <div><span>Бишкек 2024</span></div>

    </footer>
    </>
  )
}

export default Layout