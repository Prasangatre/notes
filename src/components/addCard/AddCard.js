import React, { useState } from 'react'
import styles from './addCard.module.css'
const initialState = {
  id: Math.random() * 10,
  title: '',
  topDescription: '',
  dateSection: '',
  date: '',
  name: '',
  post: '',
  detail: '',
}
const AddCard = ({ onClose,cardData, setCardData, setShow }) => {
  const [formData, setFormData] = useState(initialState)
  const fieldNames = [
    'title',
    'topDescription',
    'dateSection',
    'date',
    'name',
    'post',
    'detail',
  ]
  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }))
  }
  const handleAddNewCard = () => {
    setCardData([...cardData, formData])
    onClose()
  }

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.content}>
          <div className={styles.inputFieldContainer}>
            {fieldNames.map((fieldName) => (
              <div key={fieldName}>
                <label className={styles.input_label}>
                  {fieldName.toUpperCase()}:
                </label>
                <input
                  className={styles.input_field}
                  type={fieldName === 'date' ? 'date' : 'text'}
                  defaultValue={formData[fieldName]}
                  onChange={(e) => handleChange(fieldName, e.target.value)}
                />
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <button onClick={() => handleAddNewCard()}>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCard
