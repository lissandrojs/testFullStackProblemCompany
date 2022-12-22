import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { useState } from "react"
import { toast } from 'react-toastify';
import { Box, Container } from "@mui/material"

const RegisterSuperUser = () =>{
    
    const schema = yup.object().shape({   
        email:yup.string().email('Invalid Email ').required("Required Email"),
        password:yup.string().min(6,"Minimum 6 characters").required("Required Password"),
        name: yup.string().required("Username Required"),
        lastname: yup.string().required("Username Required"),
    })

    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    return(
        <>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' ,width:'100vw'}} />
            </Container>
        </>
    )
}

export default RegisterSuperUser