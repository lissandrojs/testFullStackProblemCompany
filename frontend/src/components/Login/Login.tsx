import { Box, Button, Typography} from "@mui/material"
import { Link } from 'react-router-dom';
import {Container, ContainerForm,Form} from './styles'

import { useForm } from 'react-hook-form';
import  * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import InputComponent from "../Input/Input";
import IFormLogin from "../../interfaces/IFormLogin";

const LoginComponent = () =>{
    const schema = yup.object().shape({
        email:yup.string().email("E-mail invalido").required("Campo Obrigatorio"),
        password:yup.string().required("Campo Obrigatorio")

    })
    const {register,handleSubmit,formState:{errors}, }= useForm<IFormLogin>({
        resolver: yupResolver(schema)
    });
    return (
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh',width: '100%' ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} >
                <Typography sx={{paddingTop:"20px"}} variant="h2">
                    Login
                </Typography>
                <Container>
                    <ContainerForm>
                        <InputComponent errors={errors.email?.message} register={register} name="email" label="E-Mail" placeholder="Seu E-Mail"/>
                        <InputComponent errors={errors.password?.message} register={register} name="password"  label="Senha" placeholder="Sua Senha" type ="password" />
                        <Button >Entrar</Button>
                    </ContainerForm>
                </Container>
            </Box>
    )
}


export default LoginComponent