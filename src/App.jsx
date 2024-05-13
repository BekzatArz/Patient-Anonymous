import React from 'react'
import logo from '../public/logo.png'
// import hyppo from '../public/scale_1200.png'
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
         <span>Hippocratic Oath </span>
I swear by Apollo, Asclepius, Hygieia, and Panacea, and I take to witness all the gods, all the goddesses, to keep according to my ability and my judgment, the following Oath. 
To consider dear to me, as my parents, him who taught me this art; to live in common with him and, if necessary, to share my goods with him; To look upon his children as my own brothers, to teach them this art.
I will prescribe regimens for the good of my patients according to my ability and my judgment and never do harm to anyone.

I will not give a lethal drug to anyone if I am asked, nor will I advise such a plan; and similarly I will not give a woman a pessary to cause an abortion.

But I will preserve the purity of my life and my arts.

I will not cut for stone, even for patients in whom the disease is manifest; I will leave this operation to be performed by practitioners, specialists in this art.

In every house where I come I will enter only for the good of my patients, keeping myself far from all intentional ill-doing and all seduction and especially from the pleasures of love with women or with men, be they free or slaves.

All that may come to my knowledge in the exercise of my profession or in daily commerce with men, which ought not to be spread abroad, I will keep secret and will never reveal.

If I keep this oath faithfully, may I enjoy my life and practice my art, respected by all men and in all times; but if I swerve from it or violate it, may the reverse be my lot.
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
          <Route path='/202' element={<Series202  />}/>
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