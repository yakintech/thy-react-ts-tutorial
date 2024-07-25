import React, { useEffect } from 'react'
import Detail from './user/Detail'

function Home() {


    useEffect(() => {

        let interval = setInterval(() => {
            console.log('Home')
        }, 1000)

        //clean up function
        return () => {
            clearInterval(interval)
        }

    }, [])



    return (
        <>
            <div>Home</div>
        </>
    )
}

export default Home