import React from 'react'
import {useSelector} from 'react-redux'
import {MdDelete} from 'react-icons/md'

import './reservas.css'

export default function Reservas(){
  const reserves = useSelector(state => state.reserve)

  return(
    <div>
      <h1 className='title'>Voce solicitou 1 reservas</h1>

      {reserves.map(reserve => (
        <div className='reservas' key={reserve.key}>
          <img
          src={reserve.image}
          alt={reserve.title}/>
          <strong>{reserve.title}</strong>
          <span>Quantidade: 2</span>
          <button onClick={() => {}}>
            <MdDelete size='16' color='white'/>
          </button>
        </div>
      ))}

      <footer>
        <button>Solicitar Reserva</button>
      </footer>
    </div>
  )
}