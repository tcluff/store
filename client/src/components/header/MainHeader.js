import React from 'react'
import { Link } from 'react-router-dom'
import HeaderDropdown from './HeaderDropdown'

const MainHeader = () => {
  return (
    <div className='main-header'>
        <Link to="/" className='link'>
          <h2 className='header-title'>
              winnoStores
          </h2>
        </Link>
        <HeaderDropdown />
    </div>
  )
}

export default MainHeader