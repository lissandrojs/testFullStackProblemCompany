import React from "react"
import './style.css'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link, Typography } from "@mui/material";

const Footer =()=>{
    return(
        <div className="downbar">
            <div className="firstBox">
                <Typography variant="h5" component="h5">
                    Ready for a growth partner?
                </Typography >
                <Typography variant="h5" component="h5">
                    Yes, I am ready!
                </Typography>
            </div>
            <div>
                <Link href="https://github.com/lissandrojs" rel="noreferrer" target="_blank">
                    <AiFillGithub style={{ width:"50px",height:"32px"}}/>
                </Link>
                <Link href="https://www.linkedin.com/in/lissandro-miranda-rocha/" rel="noreferrer" target="_blank">
                    <AiFillLinkedin style={{ width:"50px",height:"32px"}}/>
                </Link>
            </div>
        </div>
        )
}


export default Footer