import { AppBar, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './siteHeader.css'

function SiteHeader() {

    return <>
        <Box sx={{ flexGrow: 1, marginBottom:10 }}>
            <AppBar position="static">
                <ul className='menus' style={{display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/products'>Products</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/products/premium'>Premium</Link>
                    </Typography>
                </ul>
            </AppBar>
        </Box>
    </>
}

export default SiteHeader