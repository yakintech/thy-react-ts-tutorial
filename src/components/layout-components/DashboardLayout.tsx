import React from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

function DashboardLayout({children}: any) {
  return <>
    <SiteHeader/>
    {children}
    <SiteFooter/>
  </>
}

export default DashboardLayout