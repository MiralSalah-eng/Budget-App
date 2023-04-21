import React from 'react'
import { Form, Link } from 'react-router-dom';
import { formatDateToLocal, getAllMatching } from '../helpers'
import { TrashIcon } from '@heroicons/react/24/solid'


const ExpenseItem = ({ expense , showBudget }) => {
    const budget = getAllMatching({
        category:"budgets",
        key:"id",
        value:expense.budgetId
    })[0];
  return (
    <>
        <td>{expense.name}</td>
        <td>{expense.amount}</td>
        <td>{formatDateToLocal(expense.cteatedAt)}</td>
        {
          showBudget && (
            <td>
            <Link to={`/budget/${budget.id}`} style={{"--accent" :budget.color }} >
            {budget.name}
            </Link>
        </td>
          )
        }
       
        <td>
          <Form method='post'>
            <input type="hidden" name='_action' value="deleteExpense"/>
            <input type="hidden" name='expenseId' value={expense.id}/>
            <button data-testid={expense.name} className='btn btn--warning'>
              <TrashIcon width={20} />
            </button>
          </Form>
        </td>
    </>
  )
}

export default ExpenseItem