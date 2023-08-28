import React, { useEffect, useState } from 'react'
import styles from './editModal.module.css'
const EditModal = ({
  onClose,
  cardData,
  selectedCard,
  setSelectedCard,
  setCardData,
  setShowEditModal,
}) => {
  console.log(selectedCard)
  const [editData, setEditData] = useState(selectedCard)
  const [inputValue, setInputValue] = useState('')
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputPostValue, setInputPostValue] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const options = ['Madhav', 'Pavan', 'Shikhar', 'Patel']
  const optionpost=['SDE1','SDE2','SRE','MANAGER']
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1)
  const [shownamedropdown, setShowNameDropdown] = useState(false)
  const [showpostdropdown, setShowpostDropdown] = useState(false)
  const handleInputChange = (event, fieldName) => {
    console.log(fieldName)
    const value = event.target.value
    setEditData({ ...editData, [fieldName]: value })

    if (fieldName === 'name') {
      setShowNameDropdown(value === '/')
      setInputNameValue(value)
    } else if (fieldName === 'firstName') {
      setShowDropdown(value === '/')
      setInputValue(value)
    }
    
    else if (fieldName === 'post') {
      setShowpostDropdown(value === '/')
      setInputPostValue(value)
    }
    else return
  }

  const handleKeyDown = (event, fieldName) => {
    if (showDropdown || shownamedropdown||showpostdropdown) {
      if (event.key === 'ArrowUp') {
        setSelectedOptionIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : options.length - 1,
        )
      } else if (event.key === 'ArrowDown') {
        setSelectedOptionIndex((prevIndex) =>
          prevIndex < options.length - 1 ? prevIndex + 1 : 0,
        )
      } else if (event.key === 'Enter') {
        if (selectedOptionIndex !== -1) {
          if (fieldName === 'firstName') {
            setInputValue(options[selectedOptionIndex])
          } else if (fieldName === 'name') {
            setInputNameValue(options[selectedOptionIndex])
          }
          else if (fieldName === 'post') {
        
            setInputPostValue(optionpost[selectedOptionIndex])
          }
          if (fieldName === 'firstName'||fieldName === 'name') {
          setEditData({
            ...editData,
            [fieldName]: options[selectedOptionIndex],
          })}
          else if(fieldName === 'post'){
            setEditData({
              ...editData,
              [fieldName]: optionpost[selectedOptionIndex],
            })}
          
          setShowDropdown(false)
          setShowNameDropdown(false)
          setShowpostDropdown(false)
        }
      }
    }
  }
  console.log(inputValue)
  useEffect(() => {
    setSelectedOptionIndex(-1)
  }, [showDropdown])

  const handleUpdate = () => {
    const updatedCardData = cardData.map((item) =>
      item.id === editData.id ? { ...item, ...editData } : item,
    )
    setCardData(updatedCardData)
    onClose()
  }
  console.log(editData)
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.content}>
          <label className={styles.input_label}>FirstName</label>
          <input
            value={inputValue}
            className={styles.input_field}
            defaultValue={selectedCard.firstName}
            onChange={(e) => handleInputChange(e, 'firstName')}
            onKeyDown={(e) => handleKeyDown(e, 'firstName')}
            // onChange={(e) =>
            //   setEditData({ ...editData, title: e.target.value })
            // }
          />
          {showDropdown ? (
            <div style={{ background: 'pink', height: '24%' }}>
              {options.map((option, index) => (
                <div
                  key={index}
                  // className={`${styles.option} ${
                  //   inputValue === option ? styles.active : ''
                  // }`}
                  className={
                    index === selectedOptionIndex
                      ? `${styles.option} ${styles.active}`
                      : styles.option
                  }
                >
                  {option}
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
          <label className={styles.input_label}>Title</label>
          <input
            className={styles.input_field}
            defaultValue={selectedCard.title}
            onChange={(e) =>
              setEditData({ ...editData, title: e.target.value })
            }
          />
          <label className={styles.input_label}>Top Des.</label>
          <input
            className={styles.input_field}
            defaultValue={selectedCard.topDescription}
            onChange={(e) =>
              setEditData({ ...editData, topDescription: e.target.value })
            }
          />
          <label className={styles.input_label}>Date Section</label>
          <input
            className={styles.input_field}
            defaultValue={selectedCard.dateSection}
            onChange={(e) =>
              setEditData({ ...editData, dateSection: e.target.value })
            }
          />
          <label className={styles.input_label}>Date</label>
          <input
            type="date"
            className={styles.input_field}
            defaultValue={selectedCard.date}
            onChange={(e) => setEditData({ ...editData, date: e.target.value })}
          />
          <label className={styles.input_label}>Name</label>
          <input
            value={inputNameValue}
            className={styles.input_field}
            defaultValue={selectedCard.name}
            onChange={(e) => handleInputChange(e, 'name')}
            onKeyDown={(e) => handleKeyDown(e, 'name')}
          />
          {shownamedropdown ? (
            <div style={{ background: 'pink', height: '24%' }}>
              {options.map((option, index) => (
                <div
                  key={index}
                  className={
                    index === selectedOptionIndex
                      ? `${styles.option} ${styles.active}`
                      : styles.option
                  }
                >
                  {option}
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
          <label className={styles.input_label}>Post</label>
          <input
          value={inputPostValue}
            className={styles.input_field}
            defaultValue={selectedCard.post}
            onChange={(e) => handleInputChange(e, 'post')}
            onKeyDown={(e) => handleKeyDown(e, 'post')}
          />
              {showpostdropdown ? (
            <div style={{ background: 'pink', height: '24%' }}>
              {optionpost.map((option, index) => (
                <div
                  key={index}
                  className={
                    index === selectedOptionIndex
                      ? `${styles.option} ${styles.active}`
                      : styles.option
                  }
                >
                  {option}
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
          <label className={styles.input_label}>Detail</label>
          <input
            className={styles.input_field}
            defaultValue={selectedCard.detail}
            onChange={(e) =>
              setEditData({ ...editData, detail: e.target.value })
            }
          />
          
          <button onClick={() => handleUpdate()}>Edit</button>
          <button onClick={() => onClose()}>Discard</button>
        </div>
      </div>
    </div>
  )
}

export default EditModal
