import { DataGridPremium } from '@mui/x-data-grid-premium'
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../api/axiosInstance'


function ListPremium() {

    const [products, setproducts] = useState([])

    useEffect(() => {
        loadProducts()
    }
        , [])

    const loadProducts = () => {
        axiosInstance.get("/products").then(res => {
            setproducts(res.data)
        })
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
        }
    ]

    return <>
        <div style={{ height: 400, width: '100%' }}>
            <DataGridPremium
                rows={products}
                columns={columns}
            />
        </div>

    </>
}

export default ListPremium