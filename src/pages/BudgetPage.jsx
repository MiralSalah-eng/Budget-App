import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import AddExpenseForm from '../components/AddExpenseForm'
import BudgetCard from '../components/BudgetCard'
import Table from '../components/Table'
import { createExpense, deleteItem, getAllMatching } from '../helpers'

export async function budgetLoader({ params }) {
    const budget = await getAllMatching({
        category:"budgets",
        key:"id",
        value:params.id
    })[0]

    const expenses = await getAllMatching({
        category:"expenses",
        key:"budgetId",
        value:params.id
    })
    return { budget , expenses }
}

export async function budgetActions({ request }) {
  const data = await request.formData();
  const { _action , ...values  } = Object.fromEntries(data)
  if(_action === 'createExpense') {
    try {
      createExpense({
      name: values.newExpense,
      amount: values.newExpenseAmount,
      budgetId : values.newExpenseBudget
     })
      return toast.success("Expense Created!")
    } catch (e) {
       throw new Error("There was a problem creating your expense")
    }
  }

  if(_action === 'deleteExpense') {
    try {
      deleteItem({
      key:"expenses",
      id: values.expenseId,
     })
      return toast.success("Expense Deleted!!")
    } catch (e) {
       throw new Error("There was a problem deleting your expense")
    }
  }
}

const BudgetPage = () => {
    const { budget , expenses } = useLoaderData()
  return (
    <div className="grid-lg"
    style={{
      "--accent": budget.color,
    }}>
        <h1 className='h2'>
            <span className='accent'>{budget.name} </span>Overview
        </h1>
          <div className="flex-lg">
        <BudgetCard budget={budget} showDelete={true} />
        <AddExpenseForm budgets={[budget]}/>
          </div>
          <h2><span className='accent'>{budget.name}</span> Expenses</h2>
          <Table expenses={expenses} showBudget={false} />
    </div>
  )
}

export default BudgetPage