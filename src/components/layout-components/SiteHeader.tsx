import React from 'react'
import { Link } from 'react-router-dom'

function SiteHeader() {
    return <>
        <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/*replace özelliğii sayesinde sayfa geçişlerinde geri tuşuna basıldığında bir önceki sayfaya gitmez */}
            <li><Link replace to="/contact">Contact</Link></li>
            <li><Link to="/suppliers">Suppliers</Link></li>
            <li><Link to="/users">Users</Link></li>
        </ul>
    </>
}

export default SiteHeader