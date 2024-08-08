import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../api/axiosInstance'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Button, Divider } from '@mui/material'
import { trTR } from '@mui/x-data-grid/locales';
import { useNavigate } from 'react-router-dom';


function List() {

    const [products, setproducts] = useState([])

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = () => {
        axiosInstance.get("/products").then(res => {
            setproducts(res.data)
        })
    }


    const deleteProduct = (id: number) => {
        const result = window.confirm("Are you sure to delete this product?")

        if (result) {
            axiosInstance.delete(`/products/${id}`).then(res => {
                loadProducts()
            })
        }
    }

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 1
        },
        {
            field: "name",
            headerName: "Name",
            flex: 2,
            renderCell: (item: any) => <>{item.row.name.toUpperCase()}</>
        },
        {
            field:"categoryId",
            headerName: "Category ID",
            flex: 1
        },
        {
            field: "unitPrice",
            headerName: "Unit Price",
            flex: 1,
            renderCell: (item: any) => <>{Number(item.row.unitPrice)?.toFixed(2)} $</>
        },
        {
            field: "unitsInStock",
            headerName: "Units In Stock",
            flex: 1
        },
        {
            field: "quantityPerUnit",
            headerName: "Quantity Per Unit",
            flex: 2
        },
        {
            field: "delete",
            headerName: "Delete",
            flex: 1,
            renderCell: (item: any) => <Button onClick={() => deleteProduct(item.row.id)} variant="contained" color="error">Delete</Button>
        },
        {
            field:"update",
            headerName: "Update",
            flex: 1,
            renderCell: (item:any) => <Button variant="contained" color="primary" onClick={() => navigate(`/products/update/${item.row.id}`)}>Update</Button>
        }
    ]


    const navigate = useNavigate()

    return <>
        <Button variant="contained" onClick={() => navigate("/products/add")}>Add New Product</Button>
        <hr />
        <div style={{ height: 400 }}>
            <DataGrid
                rows={products} //DataGrid datasource
                columns={columns} //DataGrid columns
                slots={{ toolbar: GridToolbar }}
                slotProps={{ toolbar: { 
                    showQuickFilter: true,
                } }}
                localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
            />
        </div>
    </>
}

export default List