export function formateCurrency(amt){
    return amt.toLocaleString(undefined ,{
        style:"currency",
        currency:"USD"
    })
}

export function formatePercentage(amt){
    return amt.toLocaleString(undefined ,{
        style:"percent",
        minimumFractionDigits:0
    })
}

export function formatDateToLocal(epoc){
    return new Date(epoc).toLocaleDateString()
}

export function calculateSpentByBudget(budgetId){
    const expenses = fetchData("expenses") ?? [];
    const budgetSpent = expenses.reduce((acc,expense) =>{
        if(expense.budgetId !== budgetId ) return acc
        return (acc += expense.amount)
    },0)

    return budgetSpent
}

export function fetchData(key) {
    return JSON.parse(localStorage.getItem(key))
}

export function deleteItem({key , id}) {
    if (id) {
        const existingData  = fetchData(key) ?? []
        const newData = existingData.filter((item) =>item.id !== id )
        return localStorage.setItem(key , JSON.stringify(newData))
    }
    return localStorage.removeItem(key)
}

export function generateRandomColor(){
    const existingBudgetLength  = fetchData("budgets")?.length ?? 0
    return ` ${existingBudgetLength *34} 65% 50%`
}
export function createBudget({ name,amount }){
    const newItem = {
        id:crypto.randomUUID(),
        name : name ,
        amount : +amount,
        cteatedAt : Date.now(),
        color: generateRandomColor()
    }
    const existingBudgets = fetchData("budgets")?? []
    return localStorage.setItem("budgets",
    JSON.stringify([...existingBudgets, newItem]))
}

export function createExpense({ name, amount ,budgetId}){
    const newItem = {
        id:crypto.randomUUID(),
        name : name ,
        amount : +amount,
        cteatedAt : Date.now(),
        budgetId: budgetId,

    }
    const existingExpenses = fetchData("expenses")?? []
    return localStorage.setItem("expenses",
    JSON.stringify([...existingExpenses, newItem]))
}

export function getAllMatching({ category , key ,value }) {
    const data = fetchData(category)??[]
    return data.filter((item)=> item[key] === value)
}