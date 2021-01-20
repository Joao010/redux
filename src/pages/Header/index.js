import React from 'react'

import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import './header.css'
import logo from '../../img/logo.svg'
import reserve from '../../store/modules/reserve/reducer'

export default function Header(){
  const reserveSize = useSelector(state => state.reserve.length)

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
          <span>{reserveSize} reservas</span>
        </div>
      </Link>
    </div>
  )
}