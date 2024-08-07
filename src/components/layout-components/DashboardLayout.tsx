import React from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import { Container } from '@mui/material'

function DashboardLayout({ children }: any) {
  return <>
    <SiteHeader />
    <Container>
      {children}
    </Container>
    <SiteFooter />
  </>
}

export default DashboardLayout