import { Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../api/axiosInstance'

function Detail() {

    const [product, setproduct] = useState<any>({})

    const { id } = useParams()

    useEffect(() => {

        axiosInstance.get(`/products/${id}`).then(res => {
            setproduct(res.data)
        })

    }, [])

    const navigate = useNavigate()


    return <>

    <Button variant="contained" onClick={() => navigate(-1)}>Back</Button>
    <hr />
        <Stack spacing={2}>
            <Stack spacing={2}>
                <h1>Detail Page</h1>
                <h2>Product ID: {id}</h2>
            </Stack>
            <Stack spacing={2} direction="row">
                <h2>Product Name: {product.name}</h2>
                <h2>Unit Price: {product.unitPrice}</h2>
            </Stack>
            <Stack spacing={2} direction="row">
                <h2>Units In Stock: {product.unitsInStock}</h2>
                <h2>Quantity Per Unit: {product.quantityPerUnit}</h2>
            </Stack>
            <Stack spacing={2} direction="row">
                <h2>Category ID: {product.categoryId}</h2>
                <h2>Units On Order: {product.unitsOnOrder}</h2>
            </Stack>
            <Stack spacing={2} direction="row">
                <h2>Reorder Level: {product.reorderLevel}</h2>
                <h2>Discontinued: {product.discontinued}</h2>
            </Stack>
        </Stack>


    </>
}

export default Detail


// "unitsOnOrder": 0,
// "reorderLevel": 0,
// "discontinued": true,