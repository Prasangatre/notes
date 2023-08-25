import React, { useEffect, useState } from 'react'
import styles from './filter.module.css'

const Filter = ({ cardData, setCardData }) => {
  const [selctedFilterIndex, setSelectedFilterIndex] = useState(null)
  const [defaultData, setDefaultData] = useState([{}])
  useEffect(() => {
    console.log('running')
    const copiedData = [...cardData]
    setDefaultData(copiedData)
  }, [])

  const handleFilter = (key, value, index) => {
    setSelectedFilterIndex(index)
    console.log(key, value)
    const filteredData = cardData.filter((item) => item[key] === value)
    console.log(filteredData)
    setCardData(filteredData)
  }
  const FilterData = ['Tough Task', 'Easy Task', 'Moderate Task']
  return (
    <div>
      <div className={styles.filterHeaderConatiner}>
        <div className={styles.boldText}>Filters</div>
        <div className={styles.filterSelectionContainer}>
          {FilterData.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  selctedFilterIndex === index
                    ? styles.boxContainerSelected
                    : styles.boxContainer
                }
                onClick={() => handleFilter('diffculty', item, index)}
              >
                <div>{item}</div>
                <div className={styles.badge}>7</div>
              </div>
            )
          })}
          <div
            className={styles.boxContainer}
            onClick={() => setCardData(defaultData)}
          >
            <div>Reset Filters</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
