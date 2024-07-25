import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGetUsers } from '../../hooks/useUsers'

function List() {

    const { users, loading, error } = useGetUsers()

    const navigate = useNavigate()
    const goDetail = (id: number) => {
        navigate(`/users/${id}`)
    }

    return <>
        <h1>User List</h1>
        {
            loading ? <p>Loading...</p> : <ul>
                {
                    users.map((user: any) => <li key={user.id}>
                        <Link
                            to={`/users/${user.id}`}
                            state={{ user }}
                        >
                            {user.name}
                        </Link>
                        <button onClick={() => goDetail(user.id)}>Go Detail</button>
                    </li>)
                }
            </ul>
        }
    </>
}

export default List


//useParams, useNavigate, useLocation