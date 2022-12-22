import LoginPage from "../pages/Login/Login";
import RegisterSellerUser from "../pages/RegisterSeller/RegisterSeller";
import HomePage from "../pages/Home/Home";
import PurchasesPage from "../pages/Purchases/Purchases";

import {createBrowserRouter,} from "react-router-dom";

 const RouterApp = createBrowserRouter([
    {
      path: "/",
      element:  <LoginPage/>
    },
    {
        path:"/home",
        element: <HomePage />,
    },
    {
        path:"/register",
        element:<RegisterSellerUser/>
    },
    {
        path:"/purchase",
        element:<PurchasesPage/>
    }

  ]);

  export default RouterApp
