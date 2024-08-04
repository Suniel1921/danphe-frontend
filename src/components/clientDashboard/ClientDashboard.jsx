import React from 'react'
import ClientSideMenu from './ClientSideMenu'
import ClientChart from './ClientChart'

const ClientDashboard = () => {
  return (
    <>
     <>
    <div className="adminDashboard">
      <div className="sideMenuContainer"><ClientSideMenu/></div>
      <div className="adminChartContainer"><ClientChart/></div>     
    </div>
      
    </>
      
    </>
  )
}

export default ClientDashboard


