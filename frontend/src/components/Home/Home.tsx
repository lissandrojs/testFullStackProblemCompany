import "./style.css";
import  React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import useAPIConsumption from "../../services/api";
import IProduct  from "../../interfaces/IProducts";
import { Button } from "@mui/material";
import { margin } from "@mui/system";

 

interface IProductRequest{
  ID: number 
  name :string 
  price: number
} 

const HomeComponent = () => {

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

const getToken : any= localStorage.getItem("data")
const valueToken = JSON.parse(getToken)
const {token} =valueToken
  return (
    <div style={{ height: 830, width: '50%', margin: "0 auto"}}>
        {token ? <Button variant="contained" style={{margin:"20px 10px"}}> Add New Product</Button> :null}
      <DataGrid
      style={{display:"flex" , height:"700px"}}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default HomeComponent;
