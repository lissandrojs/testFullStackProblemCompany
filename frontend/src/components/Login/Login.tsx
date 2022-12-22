import { Box, Button, Typography} from "@mui/material"
import { Link } from 'react-router-dom';
import {Container, ContainerForm,Form} from './styles'
import useAPIConsumption from "../../services/api";
import { useForm } from 'react-hook-form';
import  * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import InputComponent from "../Input/Input";
import IFormLogin from "../../interfaces/IFormLogin";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const LoginComponent = () =>{

    const [typeUser,setTypeUser] = useState("Custumer")

    const schema = yup.object().shape({
        email:yup.string().email("Invalid Email").required("Required Email"),
        password:yup.string().required("Required Password")

    })
    const {register,handleSubmit,formState:{errors}, }= useForm<IFormLogin>({
        resolver: yupResolver(schema)
    });

    const handleClickTypeUser = (value:string) => {
         return setTypeUser(value === "Custumer" ?  "Seller" : "Custumer")
    }

    const onSubmitForm = async ({email,password}:IFormLogin)=>{

      const routerApiLogin = typeUser === "" ? "http://localhost:8081/sellers/login"  : "http://localhost:8081/users/login"

      const response = await axios.post(routerApiLogin,{email,password})
    
     if(response.data){
        localStorage.setItem("data", JSON.stringify(response.data))
        history("/home")
     }

      return  []

    }

    const history = useNavigate()
    return (
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh',width: '100%' ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }} >
                <Typography sx={{paddingTop:"20px"}} variant="h2">
                    Login  {typeUser === "Custumer" ? "Custumer" : "Seller"}
                </Typography>
                <Container style={{border: "1px solid #d6772e"}}>
                    <Button onClick={()=>handleClickTypeUser(typeUser)}>
                    {typeUser === "Custumer" ? "Custumer" : "Seller"}
                    </Button>
                <Form onSubmit={handleSubmit(onSubmitForm)}>
                    <ContainerForm >
                        <InputComponent errors={errors.email?.message} register={register} name="email" label="E-Mail" placeholder="Your E-mail"/>
                        <InputComponent errors={errors.password?.message} register={register} name="password"  label="Senha" placeholder="Your password" type ="password" />
                        
                        <Button type="submit"  variant="contained">Logar</Button>
                        <Link style={{marginTop:"10px"}} to="/register"> Not have an account yet?</Link>
                        <Button onClick={()=> history("/register")}> Register</Button>
                    </ContainerForm>
                </Form>
                </Container>
            </Box>
    )
}


export default LoginComponent