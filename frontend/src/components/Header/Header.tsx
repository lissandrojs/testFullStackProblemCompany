import React from "react"
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
        </div>
        )
}

export default Header