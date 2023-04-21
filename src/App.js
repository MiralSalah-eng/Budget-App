import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";import { deleteBudget } from "./actions/deleteBudget";
import { logoutAction } from "./actions/logoutAction";
import Main, { mainLoader } from "./layout/Main";
import BudgetPage, { budgetActions, budgetLoader } from "./pages/BudgetPage";
import Dashboard , { dashboardActions, dashboardLoader } from "./pages/Dashboard"
import Error from "./pages/Error"
import ExpensesPage, { expenseAction, expensesLoader } from "./pages/ExpensesPage";

const router = createBrowserRouter ([
  { 
    path: '/' ,
    element : <Main/>,
    errorElement:<Error />,
    loader : mainLoader,
    children : [
      {
        index:true,
        element:<Dashboard />,
        loader : dashboardLoader,
        action:dashboardActions,
        errorElement:<Error />,

      },
      {
        path:"expenses",
        element:<ExpensesPage />,
        loader : expensesLoader,
        action:expenseAction, 
        errorElement:<Error />,

      },
      {
        path:"budget/:id",
        element:<BudgetPage/>,
        loader : budgetLoader,
        action:budgetActions,
        errorElement:<Error />,
        children : [
          {
            path:"delete",
            action:deleteBudget

          }
        ]
      },
      {
        path:'logout',
        action:logoutAction,
      }

    ]
  }
])

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
        <ToastContainer/>

    </div>
  );
}

export default App;
