import { Autocomplete, Button, Grid, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../api/axiosInstance'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'

function Add() {

    const [name, setname] = useState("")
    const [unitPrice, setunitPrice] = useState("")
    const [unitsInStock, setunitsInStock] = useState(0)
    const [quantityPerUnit, setquantityPerUnit] = useState("")
    const [categoryId, setcategoryId] = useState(0)

    const [categories, setcategories] = useState([])

    useEffect(() => {

        axiosInstance.get("/categories").then(res => {
            setcategories(res.data)
        })


    }, [])

    const navigate = useNavigate()

    

    const add = () => {

        let newPrice = Number(unitPrice)

        axiosInstance.post("/products", {
            name,
            unitPrice: newPrice,
            unitsInStock,
            quantityPerUnit,
            categoryId
        }).then(res => {
            enqueueSnackbar("Product added successfully", { variant: "success" })
            navigate("/products")
        }).catch(err => {
            console.log(err)
        })

    }

    return <>
        {/* <Stack spacing={2}>
            <Stack style={{ marginTop: 20 }} direction="row" spacing={4}>
                <TextField fullWidth label="Name" variant="outlined" onChange={(e) => setname(e.target.value)} />
                <TextField type="number" fullWidth label="Unit Price" variant="outlined" onChange={(e) => setunitPrice(e.target.value)} />
            </Stack>
            <Stack direction="row" spacing={4}>
                <TextField fullWidth label="Units In Stock" variant="outlined" onChange={(e) => setunitsInStock(Number(e.target.value))} />
                <TextField fullWidth label="Quantity Per Unit" variant="outlined" onChange={(e) => setquantityPerUnit(e.target.value)} />
            </Stack>
            <Stack>
                <Button onClick={add} style={{ width: "20%" }} variant="contained">Add</Button>
            </Stack>
        </Stack> */}

        <Grid container spacing={2} sx={{ marginTop: 5 }}>

            <Grid item xs={12} md={6}>
                <TextField fullWidth label="Name" variant="outlined" onChange={(e) => setname(e.target.value)} />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField fullWidth label="Unit Price" variant="outlined" onChange={(e) => setunitPrice(e.target.value)} />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField fullWidth label="Units In Stock" variant="outlined" onChange={(e) => setunitsInStock(Number(e.target.value))} />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField fullWidth label="Quantity Per Unit" variant="outlined" onChange={(e) => setquantityPerUnit(e.target.value)} />
            </Grid>
            <Grid item xs={12}>

                <Autocomplete
                    disablePortal
                    options={categories}
                    sx={{ width: 300 }}
                    getOptionLabel={(option: any) => option.name}
                    onChange={(e, value) => setcategoryId(Number(value.id))}
                    renderInput={(params) => <TextField {...params} label="Category" />}
                />

            </Grid>
            <Grid item xs={12}>
                <Button onClick={add} style={{ width: "20%" }} variant="contained">Add</Button>
            </Grid>


        </Grid>
    </>
}

export default Add