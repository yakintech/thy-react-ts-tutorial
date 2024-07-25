import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function List() {

  const [suppliers, setSuppliers] = useState([])
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState({})

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
             
    loadSuppliers(signal)

    return () => {
      controller.abort()
    }
  }, [])


  // const location = useLocation()
  // console.log("location", location)


  const loadSuppliers = (signal?:any) => {
    axios.get("https://northwind.vercel.app/api/suppliers", {signal})
      .then(res => {
        setSuppliers(res.data)
        setloading(false)
      })
      .catch(err => {
        seterror(err)
        setloading(false)
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
    {
      loading ? <h2>Loading...</h2> : <table>
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
            suppliers.map((item: any) => <tr key={item.id}>
              <td><Link to={`/suppliers/${item.id}`}>{item.id}</Link></td>
              <td>{item.companyName}</td>
              <td>{item.contactName}</td>
              <td>{item.contactTitle}</td>
              <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
            </tr>)
          }
        </tbody>
      </table>
    }
  </>
}

export default List