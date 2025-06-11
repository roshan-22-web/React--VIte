import React from 'react'
import Button from './Button'
import withClickTracking from './WithClickTracking'

const App = () => {
  const ButtonTracking = withClickTracking(Button)
  return (
    <div>
      <ButtonTracking 
      label="Pay now" 
      trackinginfo={{"amount":"2000","user":"Kanth"}} />
    </div>
  )
}

export default App