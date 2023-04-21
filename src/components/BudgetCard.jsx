import React from 'react'
import { Form, Link } from 'react-router-dom'
import { calculateSpentByBudget, formateCurrency, formatePercentage } from '../helpers'
import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/outline";


const BudgetCard = ({ budget , showDelete = false }) => {
    const { id, name, amount, color } = budget
    const spent = calculateSpentByBudget(id)

  return (
    <div className='budget' style={{"--accent": color}}>
       <div className="progress-text">
       <h3>{name}</h3>
        <span>{formateCurrency(amount)} Budgeted</span>
       </div>

       <progress  max={amount} value={spent}>
       {formatePercentage(spent/amount)}
       </progress>

       <div className="progress-text">
        <small>{formateCurrency(spent)} spent</small>
        <small>{formateCurrency(amount - spent)} remaining</small>
       </div>

      {
      showDelete ? (
    <div className='flex-sm'>
        <Form 
      onSubmit={
        (event) => {
          if(!window.confirm(
            "Are you sure you want to permanently delete this budget?"
          ))
          {
            event.preventDefault()
          }
        }
      }
      method='post' action='delete'>
        <button className='btn' type='submit'>
          <span>Delete Budget</span>
          <TrashIcon width={20}/>
        </button>
      </Form>
    </div>
      ) : (
        <div className='flex-sm'> 
          <Link className='btn' to={`/budget/${budget.id}`}>
          <span>View Details</span>
          <BanknotesIcon width={20}/>
          </Link>
        </div>

      )
       }
       
    </div>
  )
}

export default BudgetCard