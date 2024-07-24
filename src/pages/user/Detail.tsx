import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Detail(props:any) {

    const { id } = useParams()

    const { state } = useLocation()

    console.log('state', state)

    return <>
        <h1>Id: {id}</h1>
    </>
}

export default Detail