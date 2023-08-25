import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import TopBar from '../components/topBar/TopBar'
import MainLayout from '../components/mainLayout/MainLayout'

const Home = () => {
  return (
    <div >
      <div>
        <TopBar />
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div style={{width:'10%' }}>
          <SideBar />
        </div>

        <div style={{  flex: 1 ,padding:'1rem'}}>
          <MainLayout />
        </div>
      </div>
    </div>
  )
}

export default Home
