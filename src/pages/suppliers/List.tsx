import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function List() {

  const [suppliers, setSuppliers] = useState([])


  useEffect(() => {
    loadSuppliers()
  }, [])


  // const location = useLocation()
  // console.log("location", location)


  const loadSuppliers = () => {
    axios.get("https://northwind.vercel.app/api/suppliers")
      .then(res => {
        setSuppliers(res.data)
      })
  }


  const deleteSupplier = (id: number) => {

    var result = window.confirm("Are you sure you want to delete this record?")

    if (result) {
      axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`)
        .then(res => {
          loadSuppliers()
        })
    }

  }

  return <>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Company Name</th>
          <th>Contact Name</th>
          <th>Contact Title</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          suppliers.map((item: any) => <tr>
            <td><Link to={`/suppliers/${item.id}`}>{item.id}</Link></td>
            <td>{item.companyName}</td>
            <td>{item.contactName}</td>
            <td>{item.contactTitle}</td>
            <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
          </tr>)
        }
      </tbody>
    </table>
  </>
}

export default List