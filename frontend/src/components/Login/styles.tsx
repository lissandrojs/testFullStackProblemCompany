import styled from "styled-components";


export const Container = styled.div`
    height: 600px;
    border-radius: 25px;
    display: flex;
    margin-top: 20px;
    padding: 20px;
    width: 400px;
    flex-direction: column;
    justify-content: center;
    background-color: #cacaca;
    align-items: center;
    h1{
        color: var(--color-primary);
        margin-bottom: 30px;
    }
    h3{
        text-align: center;
        color: var(--grey-0);
        margin-top: 15px;
    }
    a{
        text-align: center;
        font-size: 12px;
        color: var(--grey-1);
    }
   
   
`
export const Form = styled.form`
    @media (max-width:280px){
        width: 260px;
    }
    @media (min-width:768px){
        width: 369px;
    }
    width:296px;
    height: 402px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
    background-color:var(--grey-3) ;
`

export const ContainerForm = styled.div`
display:flex;
flex-direction: column;

button{
    margin-bottom: 10px;
    margin-top: 10px;
}
@media (min-width:768px){
    
        button{
            width: 324px;
        }
    }
    @media (max-width:320px ){
        
        button{
            margin-bottom: 15px;
            width: 245px;
        }
    }
    @media (max-width:767px){
        button{
            width: 265px;
            margin-bottom: 15px;
        }
    }
    @media(max-width:420px){
        button{
        margin-bottom: 15px;
        width: 255px;
        }
    }
    @media (max-width:280px){
       button{
        margin-bottom: 15px;
           width: 240px;
       }
    }
`