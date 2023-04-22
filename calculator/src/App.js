import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { v4 as uuidv4 } from 'uuid'

const initialExpenses = [
  {id: uuidv4(), charge:"rent", amount:1600},
  {id: uuidv4(), charge:"car payment", amount:400},
  {id: uuidv4(), charge:"credit card bill", amount:1200}
]
function App() {
  const [expenses, setExpenses] = useState(initialExpenses)
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')

  const handleCharge = e => {
    setCharge(e.target.value)
  }
  const handleAmount = e => {
    setAmount(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if(charge !== '' && amount > 0){
      const singleExpense = {id: uuidv4(), charge, amount} // same as charge:charge, amount:amount
      setExpenses([...expenses, singleExpense])
      setCharge('')
      setAmount('')
    } else {
      // handle alert called
    }
  }
  return (
    <>
      <Alert/>
      <h1>Budget calculator</h1>
      <main className='App'>
      <ExpenseForm 
      charge={charge} 
      amount={amount} 
      handleAmount={handleAmount} 
      handleCharge={handleCharge} 
      handleSubmit={handleSubmit}/>
      <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        total spending : <span className='total'>
          {expenses.reduce((acc, curr) => {
            return acc+= parseInt(curr.amount)
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
