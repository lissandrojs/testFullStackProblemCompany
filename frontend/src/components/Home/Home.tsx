import "./style.css";
import  React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import useAPIConsumption from "../../services/api";
import IProduct  from "../../interfaces/IProducts";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import  * as yup from "yup"
import InputComponent from "../Input/Input";
import { ContainerForm, Form } from "../Login/styles";
import axios from "axios";


 

interface IProductRequest{
  ID: number 
  name :string 
  price: number
} 

interface IProductAdd{
  name :string 
  price: number
} 



const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'price', headerName: 'price', width: 130 },
  
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.name || ''} ${params.row.price || ''}`,
  },
];

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const HomeComponent = () => {

  const schema = yup.object().shape({
    name: yup.string().required("Required name"),
    price:yup.number().required("Required price")

  })
  const {register,handleSubmit,formState:{errors}, }= useForm<IProductAdd>({
    resolver: yupResolver(schema)
  });


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 const apiConsumption = useAPIConsumption()

 const [rows,setRows] = useState( [
  
  { id: 1, name: 'Snow',  price: 35 },
 { id: 2, name: 'Lannister', price: 42 },
 { id: 3, name: 'Lannister', price: 45 },
 { id: 4, name: 'Stark', price: 16 },
 { id: 5, name: 'Targaryen', price: null },
 { id: 6, name: 'Melisandre', price: 150 },
 { id: 7, name: 'Clifford', price: 44 },
 { id: 8, name: 'Frances', price: 36 },
 { id: 9, name: 'Roxie', price: 65 },])

const getToken : any= localStorage.getItem("data")
const valueToken = JSON.parse(getToken)
const {token} =valueToken

const onSubmitForm = async ({name,price}:IProductAdd)=>{
   const request =    axios.post("http://localhost:8081/products",{name,price}, `Bearer ${token}`)


  }


 useEffect(()=>{

  const getStorage = localStorage.getItem("product")  

  if (!getStorage) {
    apiConsumption.getProducts().then((data)=>{
    
      const newObjt :Array<IProduct> = []

      data?.forEach((element:IProductRequest) => {

       
          newObjt.push({
            id:element.ID,
            name:element.name,
            price:Number(element.price)
        })
        
      });
        
    setRows(newObjt)
    })
  }
},[])

  return (
    <div style={{ height: 830, width: '50%', margin: "0 auto"}}>
        {token ? <Button onClick={handleOpen} variant="contained" style={{margin:"20px 10px"}}> Add New Product</Button> :null}
      <DataGrid
      style={{display:"flex" , height:"700px" ,marginTop:"20px"}}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <Form onSubmit={handleSubmit(onSubmitForm)}>
            <ContainerForm >
              <InputComponent errors={errors.name?.message} register={register} name="name" label="Name Product" placeholder="Name product"/>
              <InputComponent errors={errors.price?.message} register={register} name="price"  label="Price Product" placeholder="Price product" type="number" />
              </ContainerForm>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleClose}>Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HomeComponent;
