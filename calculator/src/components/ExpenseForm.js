import React from 'react'
import {MdSend} from 'react-icons/md'

const ExpenseForm = ({charge, amount, handleCharge, handleAmount, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div className='form-center'></div>
        <div className='form-group'>
            <label htmlFor='charge'>charge</label>
            <input 
            type='text' 
            className='form-control' 
            id='charge' 
            name='charge' 
            placeholder='e.g. rent' 
            value={charge}
            onChange={handleCharge}
            ></input>
        </div>
        <div className='form-group'>
            <label htmlFor='amount'>amount</label>
            <input 
            type='number' 
            className='form-control' id='amount' name='amount' placeholder='e.g. 100'
            value = {amount}
            onChange={handleAmount} ></input>
        </div>
        <button type='submit' className='btn'>submit <MdSend className='btn-icon' /></button>
    </form>
  )
}

export default ExpenseForm
