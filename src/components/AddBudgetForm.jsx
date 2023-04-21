import React from 'react'
import { Form } from 'react-router-dom'
import { CurrencyDollarIcon } from "@heroicons/react/24/solid"

const AddBudgetForm = () => {
  return (
    <div className='form-wrapper'>
        <h2 className="h3">
        Create budget
      </h2>
        <Form className='grid-sm' method='post' > 
        <input type='hidden' name='_action' value='createBudget'/>
            <div className='grid-xs'>
                <label htmlFor='newBudget'>Budget name</label>
                <input 
                type='text'
                name='newBudget'
                id='newBudget'
                placeholder="e.g., Groceries"
                required
                />
            </div>
            <div className='grid-xs'>
                <label htmlFor='newBudgetAmount'>Budget amount</label>
                <input 
                type='number'
                step="0.01"   
                name='newBudgetAmount'
                id='newBudgetAmount'
                placeholder="e.g., $350"
                required
                inputMode="decimal"
                />
                
            </div>

            <button className='btn btn--dark' type='submit'>
                <span>Create Budget</span>
                <CurrencyDollarIcon width={20}/>
            </button>
        </Form>
    </div>
  )
}

export default AddBudgetForm