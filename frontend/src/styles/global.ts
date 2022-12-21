import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;   
    }
   
    a{
        text-decoration: none;
    }
    label{
        font-size: 12px;
    }   
`;

