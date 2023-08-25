import React from 'react'
import styles from './topBar.module.css'

const TopBar = () => {
  return (
    <div>
      <div className={styles.mainContainer}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{height:'100%',fontWeight:'600',textAlign:'center'}}>ArrowHead</div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
