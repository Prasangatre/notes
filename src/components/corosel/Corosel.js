import React, { useState } from 'react'
import styles from './corosel.module.css'
import Modal from '../modal/Modal'
import EditModal from '../editModal/EditModal'
import CustomModal from '../customModal/CustomModaal'
import AddCard from '../addCard/AddCard'

const Corosel = ({ cardData, setCardData }) => {
  const [startIndex, setStartIndex] = useState(0)
  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState(null)
  const [selectedCard, setSelectedCard] = useState({})
  const [editModal, setShowEditModal] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [componentType, setComponentType] = useState('')
  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + 3)
  }

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0))
  }
  const HandleSelectCard = (card, index) => {
    setSelected(index)
    console.log(card)
    setSelectedCard(card)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const handleEditClick = () => {
    setComponentType('EditComponent')
    openModal()
  }
  const handleAddCardClick=()=>{
    setComponentType('AddCard')
    openModal()
  }
  return (
    <div>
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
      >
        <button onClick={() => handleEditClick()}>Edit</button>
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {cardData.map((card, index) => (
            <div
              onClick={() => HandleSelectCard(card, index)}
              className={
                selected === index
                  ? styles.carouselCardSelected
                  : styles.carouselCard
              }
              key={card.id}
            >
              <div className={styles.cardContainer}>         
                <h2 className={styles.title}>{card.title}</h2>
                <div className={styles.textStyle}>Hi {card.firstName}</div>
                <div className={styles.textStyle}>{card.topDescription}</div>
                <div>
                  <div className={styles.textStyle}>
                    {card.dateSection} {card.date}
                  </div>
                  <div>{card.name}</div>
                  <div>{card.post}</div>
                  <div>{card.detail}</div>
                </div>
              </div>
            </div>
          ))}
          {
            <div
              onClick={() => handleAddCardClick()}
              className={`${styles.carouselCard} ${styles.createNewCard}`}
            >
              <h2>Create New Card</h2>
              <p>Click to add a new card</p>
            </div>
          }
        </div>

        {/* <div className={styles.carouselControls}>
          <button onClick={handlePrev} disabled={startIndex === 0}>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex >= cardData.length - 3}
          >
            Next
          </button>
        </div> */}
      </div>
      {/* <div style={{ position: 'relative', width: '100%' }}>
        {show ? (
          <Modal
            startIndex={startIndex}
            setStartIndex={setStartIndex}
            cardData={cardData}
            setShow={setShow}
            setCardData={setCardData}
          />
        ) : (
          <></>
        )}
      </div>
      <div style={{ position: 'relative', width: '100%' }}>
        {editModal ? (
          <EditModal
            cardData={cardData}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            setCardData={setCardData}
            setShowEditModal={setShowEditModal}
          />
        ) : (
          <></>
        )}
      </div> */}
      <div>
        <CustomModal isOpen={isModalOpen} onClose={closeModal}>
          {/* <AddCard
            onClose={closeModal}
            cardData={cardData}
            setCardData={setCardData}
            setShow={setShow}
          /> */}

          {componentType === 'EditComponent' ? (
            <EditModal
              onClose={closeModal}
              cardData={cardData}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
              setCardData={setCardData}
              setShowEditModal={setShowEditModal}
            />
          ) : componentType === 'AddCard' ? (
            <AddCard
              onClose={closeModal}
              cardData={cardData}
              setCardData={setCardData}
              setShow={setShow}
            />
          ) : (
            <></>
          )}
        </CustomModal>
      </div>
    </div>
  )
}

export default Corosel
