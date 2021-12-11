import ResultsPage from './components/ResultsPage'
import Options from './components/Options'
import React from 'react'

function App() {
  return (
    <div className='pg-container'>
      <div className='plane'>
        <img src='../logos/plane1.png' alt='plane' />
      </div>
      <div className='results-container'>
        <Options />
        <ResultsPage />
      </div>
    </div>
  )
}

export default App
