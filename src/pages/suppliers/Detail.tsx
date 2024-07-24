import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {

    const { id } = useParams()
    const [detail, setdetail] = useState<any>({})


    useEffect(() => {

        axios.get(`https://northwind.vercel.app/api/suppliers/${id}`)
            .then(res => {
                setdetail(res.data)
            })


    }, [])


    return <>
        <h1>Supplier Detail</h1>
        <hr />
        <h3>Company Name: {detail.companyName}</h3>
        <h3>Contact Name: {detail.contactName}</h3>
        <h3>Contact Title: {detail.contactTitle}</h3>
        <h3>City: {detail.address?.city}</h3>
        <h3>Country: {detail.address?.country}</h3>
    </>
}

export default Detail