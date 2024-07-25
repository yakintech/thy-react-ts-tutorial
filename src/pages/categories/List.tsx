import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { queryClient } from '../..'
import { Link } from 'react-router-dom'
import { axiosInstance } from '../../api/axiosInstance'

function List() {

    const { data: categories, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            return axiosInstance.get("categories")
                .then((res) => res.data)
        },
        // staleTime: 20000, //stale time ile cache süresi belirlenir
        // refetchInterval: 8000
    })

    const refresh = () => {
        queryClient.invalidateQueries({ queryKey: ["categories"] })
    }

    return <>
    <hr />
        <div>
            <button onClick={() => refresh()}>Refresh</button>
            <Link style={{marginLeft:20}} to="/categories/add">Add</Link>
        </div>
        {
            isLoading ? <h2>Loading...</h2> : <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories && categories.map((item: any) => <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </>
}

export default List