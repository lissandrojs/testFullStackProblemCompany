import { Box, Button, Typography} from "@mui/material"
import { Link } from 'react-router-dom';
import {Container, ContainerForm,Form} from './styles'

import { useForm } from 'react-hook-form';
import  * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import InputComponent from "../Input/Input";
import IFormLogin from "../../interfaces/IFormLogin";
import { useNavigate } from "react-router-dom";

const LoginComponent = () =>{
    const schema = yup.object().shape({
        email:yup.string().email("Invalid Email").required("Required Email"),
        password:yup.string().required("Required Password")

    })
    const {register,handleSubmit,formState:{errors}, }= useForm<IFormLogin>({
        resolver: yupResolver(schema)
    });

    const history = useNavigate()
    return (
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh',width: '100%' ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }} >
                <Typography sx={{paddingTop:"20px"}} variant="h2">
                    Login
                </Typography>
                <Container style={{border: "1px solid #d6772e"}}>
                <Form>
                    <ContainerForm>
                        <InputComponent errors={errors.email?.message} register={register} name="email" label="E-Mail" placeholder="Your E-mail"/>
                        <InputComponent errors={errors.password?.message} register={register} name="password"  label="Senha" placeholder="Your password" type ="password" />
                        <Button  variant="contained">Logar</Button>
                        <Link style={{marginTop:"10px"}} to="/register"> Not have an account yet?</Link>
                        <Button onClick={()=> history("/register")}> Register</Button>
                    </ContainerForm>
                </Form>
                </Container>
            </Box>
    )
}


export default LoginComponent