import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../api/axiosInstance'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { trTR } from '@mui/x-data-grid/locales';


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
            field: "unitPrice",
            headerName: "Unit Price",
            flex: 1,
            renderCell: (item: any) => <>{item.row.unitPrice?.toFixed(2)} $</>
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
        }
    ]


    return <>
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