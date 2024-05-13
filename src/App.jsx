import React from 'react'
import logo from '../public/logo.png'
import {BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

import "./AppStyles.css"

import Series501 from './components/Series501'
import Series202 from './components/Series202'
import Series201 from './components/Series201'
import Series601 from './components/Series601'
import Series701 from './components/Series701'

const App = () => {
  return (
    <div className='appStyles'>
      <div className="containerStyles">
      <Router>
        <nav className='nav'>
      <div className="logos">
        <img src={logo} width={70} alt="" />
      </div>
      <div className='header'>
        <div className="header__header">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias corporis accusantium suscipit ullam, molestiae quisquam nobis distinctio, maiores maxime quam aliquid a, provident possimus voluptas beatae quidem nisi doloribus recusandae.
        </div>
        <div className="header__nav">
          <div><NavLink to='/'>Home</NavLink></div>
          <div><NavLink to='/202'>Материалы про КТ</NavLink></div>
          <div><NavLink to='/501'>Материалы по МРТ</NavLink></div>
          <div><NavLink to='/601'>Материалы по УЗИ</NavLink></div>
          <div><NavLink to='/701'>Материалы по ККК</NavLink></div>
        </div>
      </div>
        </nav>
        <Routes>
          <Route path='/' element={<Series201 />}/>
          <Route path='/202' element={<Series202 />}/>
          <Route path='/501' element={<Series501 />}/>
          <Route path='/601' element={<Series601 />}/>
          <Route path='/701' element={<Series701 />}/>
        </Routes>
      </Router>
      </div>
    </div>
  )
}

export default App