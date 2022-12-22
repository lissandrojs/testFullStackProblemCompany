import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { useState } from "react"
import { toast } from 'react-toastify';
import { Button, Typography ,Box} from "@mui/material";
import { ContainerForm , Container, Form} from "../Login/styles";
import InputComponent from "../Input/Input";
import { Link, useNavigate } from "react-router-dom";
import IFormLogin from "../../interfaces/IFormLogin";
import IFormRegisterSimplesUser from "../../interfaces/IFormRegisterSimplesUser";


const RegisterSuperUser = () =>{
    const schema = yup.object().shape({   
        email:yup.string().email('Invalid Email').required("Required Email"),
        password:yup.string().min(6,"Minimum 6 characters").required("Required Password"),
        name: yup.string().required("Required Name"),
        lastname: yup.string().required("Required Lastname"),
    })

    const {register,handleSubmit,formState:{errors}, }= useForm<IFormRegisterSimplesUser>({
        resolver: yupResolver(schema)
    });

    const history = useNavigate()
    
    return(
          
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh',width: '100%' ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }} >
        <Typography sx={{paddingTop:"20px"}} variant="h2">
            Register User
        </Typography>
        <Container style={{border: "1px solid #d6772e"}}>
            <Form>
            <ContainerForm>
                <InputComponent errors={errors.email?.message} register={register} name="email" label="E-Mail" placeholder="Your E-mail"/>
                <InputComponent errors={errors.password?.message} register={register} name="password"  label="Senha" placeholder="Your password" type ="password" />
                <InputComponent errors={errors.name?.message} register={register} name="name" label="Name" placeholder="Your name"/>
                <InputComponent errors={errors.lastname?.message} register={register} name="lastname"  label="Lastname" placeholder="Your password" type ="password" />
                <Button  variant="contained">Register</Button>
            </ContainerForm>
            </Form>
        </Container>
    </Box>
    )
}

export default RegisterSuperUser