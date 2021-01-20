import React from 'react'

import {Link} from 'react-router-dom'

import './header.css'
import logo from '../../img/logo.svg'

export default function Header(){
  return(
    <div className='container'>
      <Link to='/'>
        <img
        src={logo}
        alt='logo'
        className='logo'/>
      </Link>
      <Link className='reserva' to='/reservas'>
        <div>
          <strong>Minhas Reservas</strong>
          <span>0 reservas</span>
        </div>
      </Link>
    </div>
  )
}