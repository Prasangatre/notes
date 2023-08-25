import React, { useState } from 'react'
import Filter from '../filters/Filter'
import Corosel from '../corosel/Corosel'

const MainLayout = () => {
  const cardsData = [
    {
      id: 1,
      firstName:'Sheeraj',
      title: 'Message 1',
      topDescription:
        'I came across [ Company Name ] and was impressed by your innovative solutions. As a VC, Im interested in exploring investment opportunities with you. Your expertise and market traction caught my attention',
      dateSection:
        'Lets connect and discuss further. Are you available for a meeting',
      date: '22/12/23',
      name: 'Rahul',
      post: 'Sde',
      detail: 'some details here',
      isSelected: false,
      diffculty: 'Tough Task',
    },
    {
      id: 2,
      firstName:'Shikhar',
      title: 'Message 2',
      topDescription:
        'I came across [ Company Name ] and was impressed by your innovative solutions. As a VC, Im interested in exploring investment opportunities with you. Your expertise and market traction caught my attention',
      dateSection:
        'Lets connect and discuss further. Are you available for a meeting',
      date: '22/12/23',
      name: 'Rahul',
      post: 'Sde',
      detail: 'some details here',
      isSelected: false,
      diffculty: 'Easy Task',
    },
    {
      id: 3,
      firstName:'Pavan',
      title: 'Message 3',
      topDescription:
        'I came across [ Company Name ] and was impressed by your innovative solutions. As a VC, Im interested in exploring investment opportunities with you. Your expertise and market traction caught my attention',
      dateSection:
        'Lets connect and discuss further. Are you available for a meeting',
      date: '22/12/23',
      name: 'Rahul',
      post: 'Sde',
      detail: 'some details here',
      isSelected: false,
      diffculty: 'Moderate Task',
    },

    // Add more card data here
  ]
  const [cardData, setCardData] = useState(cardsData)
  return (
    <div style={{  height: '100%', }}>
      <div>
        <Filter cardData={cardData} setCardData={setCardData} />
      </div>
      <div style={{marginTop:'5rem'}}>
        <Corosel cardData={cardData} setCardData={setCardData} />
      </div>
    </div>
  )
}

export default MainLayout
