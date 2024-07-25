import axios from "axios"
import { useEffect, useState } from "react"



export const useGetUsers = () => {

    const [users, setusers] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState({})


    useEffect(() => {
      
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setusers(res.data)
            setloading(false)
        })
        .catch(err => {
            seterror(err)
            setloading(false)
        })

    }, [])


    return {users, loading, error}
    

}