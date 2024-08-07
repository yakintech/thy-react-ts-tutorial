import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function SiteHeader() {



    return <>

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <ul className='menus' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/'>Home</Link>
                    </Typography>
                </ul>
            </AppBar>
        </Box>
    </>
}

export default SiteHeader