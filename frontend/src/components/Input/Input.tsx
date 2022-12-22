import { Container, ContentInput } from "./styles"

interface InputTypes {
    label?: string
    register?: any
    name?: string
    errors?: string 
    placeholder?:string
    type?:string
}

const InputComponent =({label,register ,name,errors,...rest}:InputTypes)=>{
    return(
       <Container>
           <div>
           <label>{label}</label>
           {!!errors && <span> * {errors}</span>}
           </div>
           
           <ContentInput isError={!!errors}>
               <input {...register(name)} {...rest}/>
           </ContentInput>
       </Container>
    )
}
export default InputComponent