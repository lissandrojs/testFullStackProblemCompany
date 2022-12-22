import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { Button, Typography ,Box} from "@mui/material";
import { ContainerForm , Container, Form} from "../Login/styles";
import InputComponent from "../Input/Input";
import { Link, useNavigate } from "react-router-dom";
import IFormLogin from "../../interfaces/IFormLogin";
import IFormRegisterSimplesUser from "../../interfaces/IFormRegisterSimplesUser";
import React, { useState } from "react";
import axios from "axios";


const RegisterUser = () =>{

    const history = useNavigate()

    const [typeUser,setTypeUser] = useState("Custumer")

    const schema = yup.object().shape({   
        email:yup.string().email('Invalid Email').required("Required Email"),
        password:yup.string().min(6,"Minimum 6 characters").required("Required Password"),
        name: yup.string().required("Required Name"),
        lastname: yup.string().required("Required Lastname"),
    })

    const {register,handleSubmit,formState:{errors}, }= useForm<IFormRegisterSimplesUser>({
        resolver: yupResolver(schema)
    });

    const handleClickTypeUser = (value:string) => {
        return setTypeUser(value === "Custumer" ?  "Seller" : "Custumer")
   }

   const onSubmitForm = async ({email,password,name,lastname}:IFormRegisterSimplesUser)=>{
       
      const routerApiLogin = typeUser === "Seller" ? "http://localhost:8081/sellers"  : "http://localhost:8081/users"

      const response = await axios.post(routerApiLogin,{email,password,name,lastname})

      if(response.data){
        history("/")
     }
     
      return  []
   }


    
    return(
          
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh',width: '100%' ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }} >
        <Typography sx={{paddingTop:"20px"}} variant="h2">
            Register User {typeUser === "Custumer" ? "Custumer" : "Seller"}
        </Typography>
        <Container style={{border: "1px solid #d6772e"}}>
             <Button onClick={()=>handleClickTypeUser(typeUser)}>
                 {typeUser === "Custumer" ? "Custumer" : "Seller"}
            </Button>
            <Form onSubmit={handleSubmit(onSubmitForm)}>
            <ContainerForm >
                <InputComponent errors={errors.email?.message} register={register} name="email" label="E-Mail" placeholder="Your E-mail"/>
                <InputComponent errors={errors.password?.message} register={register} name="password"  label="Senha" placeholder="Your password" type ="password" />
                <InputComponent errors={errors.name?.message} register={register} name="name" label="Name" placeholder="Your name"/>
                <InputComponent errors={errors.lastname?.message} register={register} name="lastname"  label="Lastname" placeholder="Your password" />
                <Button type="submit"  variant="contained">Register</Button>
            </ContainerForm>
            </Form>
        </Container>
    </Box>
    )
}

export default RegisterUser