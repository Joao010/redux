import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {MdDelete, MdAddCircle, MdRemoveCircle} from 'react-icons/md'

import {removeReserve, updateAmountRequest} from '../../store/modules/reserve/actions'

import './reservas.css'

export default function Reservas(){
  const reserves = useSelector(state => state.reserve)
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(removeReserve(id))
  }

  const incrementAmount = (trip) => {
    dispatch(updateAmountRequest(trip.id, trip.amount + 1))
  }

  const decrementAmount = (trip) => {
    dispatch(updateAmountRequest(trip.id, trip.amount - 1))
  }

  return(
    <div>
      <h1 className='title'>Voce solicitou {reserves.length} reservas</h1>

      {reserves.map(reserve => (
        <div className='reservas' key={reserve.id}>
          <img
          src={reserve.image}
          alt={reserve.title}/>
          <strong>{reserve.title}</strong>

          <div id='amount'>
            <button onClick={() => decrementAmount(reserve)}>
              <MdRemoveCircle size='25' color='black'/>
            </button>
            <input type='text' readOnly value={reserve.amount}/>
            <button onClick={() => incrementAmount(reserve)}>
              <MdAddCircle size='25' color='black'/>
            </button>
          </div>

          <button onClick={() => handleRemove(reserve.id)}>
            <MdDelete size='16' color='black'/>
          </button>
        </div>
      ))}

      <footer>
        <button>Solicitar Reserva</button>
      </footer>
    </div>
  )
}