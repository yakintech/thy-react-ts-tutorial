import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Autocomplete, Button, TextField } from '@mui/material'
import { axiosInstance } from '../../api/axiosInstance'
import { enqueueSnackbar } from 'notistack'

function Update() {

    const { id } = useParams()
    const [product, setproduct] = useState<any>({})
    const [categories, setcategories] = useState<any>([])
    const [categoryId, setcategoryId] = useState(0)


    //update sayfası açılırken update edilecek veriyi statee atıyoruz. 
    useEffect(() => {

        axiosInstance.get(`/products/${id}`).then(res => {
            setproduct(res.data)
            setcategoryId(res.data.categoryId)
            console.log("res.data.categoryId", res.data.categoryId)

            axiosInstance.get("/categories").then(res => {
                setcategories(res.data)
            })

        })



    }, [])

    const navigate = useNavigate()


    const update = () => {
        axiosInstance.put(`/products/${id}`, product).then(res => {
            enqueueSnackbar("Product updated successfully", { variant: "success" })
            navigate("/products")
        })
    }

    return <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h1>Update Product</h1>
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField value={product.name} fullWidth variant="outlined" onChange={(e) => setproduct({ ...product, name: e.target.value })} />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField value={product.unitPrice} fullWidth variant="outlined" onChange={(e) => setproduct({ ...product, unitPrice: e.target.value })} />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField value={product.unitsInStock} fullWidth variant="outlined" onChange={(e) => setproduct({ ...product, unitsInStock: e.target.value })} />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField value={product.quantityPerUnit} fullWidth variant="outlined" onChange={(e) => setproduct({ ...product, quantityPerUnit: e.target.value })} />
            </Grid>
            <Grid item xs={12}>

                <Autocomplete
                    disablePortal
                    options={categories}
                    sx={{ width: 300 }}
                    getOptionLabel={(option: any) => option.name}
                    value={categories.find((item: any) => item.id == categoryId)}
                    onChange={(e, value) => setcategoryId(Number(value.id))}
                    renderInput={(params) => <TextField {...params} label="Category" />}
                />

            </Grid>
            <Grid item xs={12}>
                <Button onClick={update} style={{ width: "20%" }} variant="contained">Update</Button>
            </Grid>


        </Grid>
    </>
}

export default Update