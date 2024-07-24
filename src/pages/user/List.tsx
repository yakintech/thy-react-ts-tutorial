import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function List() {

    let users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Çağatay Yıldız' },
        { id: 3, name: "Oğuzha Yılmaz" },
        { id: 4, name: 'Ece Arslan' },
    ]

    const navigate = useNavigate()
    const goDetail = (id: number) => {
        navigate(`/users/${id}`)
    }

    return <>
        <h1>User List</h1>
        <ul>
            {
                users.map(user => <li>
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
    </>
}

export default List


//useParams, useNavigate, useLocation