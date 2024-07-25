import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { queryClient } from '../..'
import { axiosInstance } from '../../api/axiosInstance'

function Add() {

    const [formData, setformData] = useState({
        name: "",
        description: ""
    })

    const { data: addCategoryResponse, mutate: addNewCategory } = useMutation({
        mutationKey: ["addCategory"],
        mutationFn: async (data: any) => {
            return axiosInstance.post("categories", data)
                .then(res => res.data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] })
        },
        onError: (error) => {
            console.log("error", error)
        }
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addNewCategory(formData)
    }

    return <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name:</label>
                <input required type='text' name='name' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Description:</label>
                <input required type='text' name='description' onChange={handleChange} />
            </div>
            <div>
                <button type='submit'>Save</button>
            </div>
        </form>
    </>
}

export default Add