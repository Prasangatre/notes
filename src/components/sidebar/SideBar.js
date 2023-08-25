import React from 'react'
import styles from './sideBar.module.css'

const SideBar = () => {
  return (
    <div style={{height:'100%'}}>
      <div className={styles.mainContainer}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'4rem',padding:'0.5rem'}}>
          <div style={{fontWeight:'400',fontSize:'1.2rem',border:'2px solid black',padding:'1rem'}}>ArrowHead</div>
          <div  style={{fontWeight:'400',fontSize:'1.2rem',border:'2px solid black',padding:'1rem'}}>ArrowHead</div>
          <div style={{fontWeight:'400',fontSize:'1.2rem',border:'2px solid black',padding:'1rem'}}>ArrowHead</div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
