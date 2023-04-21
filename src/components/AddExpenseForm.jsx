import React from 'react'
import { Form } from 'react-router-dom'
import { PlusCircleIcon } from "@heroicons/react/24/solid"

const AddExpenseForm = ({budgets}) => {
  return (
    <div className='form-wrapper'>
        <h2 className="h3">
        Add new{" "}{ budgets.length === 1 && (<span className='accent'>{budgets[0].name} </span>)}Expense
      </h2>
      <Form className='grid-sm' method='post' > 
        <div className="expense-inputs">
        <div className='grid-xs'>
                <label htmlFor='newExpense'>Expense name</label>
                <input 
                type='text'
                name='newExpense'
                id='newExpense'
                placeholder="e.g., Coffee"
                required
                />
        </div>
               <div className='grid-xs'>
               <label htmlFor='newExpenseAmount'>Amount</label>
                <input 
                type='number'
                step="0.01"   
                name='newExpenseAmount'
                id='newExpenseAmount'
                placeholder="e.g., 3.50"
                required
                inputMode="decimal"
                />
            </div>
        </div>
        <div className='grid-xs' hidden={budgets.length===1}>
            <label htmlFor="newExpenseBudget">Budget Category</label>
                <select name='newExpenseBudget' id='newExpenseBudget'>
                    {budgets.sort((a,b)=> a.createdAt - b.createdAt)
                    .map((budget)=>(
                        <option key={budget.id} value={budget.id} >{budget.name}</option>
                    ))
                    }
                </select>
            </div>
        <input type='hidden' name='_action' value='createExpense'/>
            <button className='btn btn--dark' type='submit'>
                <span>Add Expense</span>
                <PlusCircleIcon width={20}/>
            </button>
         
        </Form>
    </div>
  )
}

export default AddExpenseForm