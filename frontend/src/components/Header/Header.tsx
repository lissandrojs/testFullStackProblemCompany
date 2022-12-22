import React from "react"
import { ToastContainer } from "react-toastify"
import "./style.css"

const Header =()=>{
    return(
        <div className="topbar">
            <div>
                <img style={{width:"65px"}}src="https://problemcompany.org/assets/logo/logo-only.svg"/>
            </div>
            <div className="userAction">
                <ul>
                    <li>
                        user
                    </li>
                    <li>
                        cart
                    </li>
                </ul>
            </div>
            <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          ></ToastContainer>
        </div>
        )
}

export default Header