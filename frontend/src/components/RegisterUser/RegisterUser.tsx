import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { useState } from "react"
import { toast } from 'react-toastify';
import { Box, Container } from "@mui/system"


const RegisterUser = () =>{
    const schema = yup.object().shape({   
        email:yup.string().email('Email Invalido').required("Email Obrigatorio"),
        password:yup.string().min(6,"Minimo 6 carcteres").required("Senha e obrigatorio"),
        name: yup.string().required("Nome De usuario Obrigatorio"),
        confirmedPassword: yup.string().required("Senhas diferentes").oneOf([yup.ref("password")], "Senhas desiguais"),
        course_module:yup.string().required("Nome De usuario Obrigatorio")
    })
    
    return(
          
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh',width: '100%' }} >

                </Box>
    )
}

export default RegisterUser