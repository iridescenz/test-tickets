import ResultsPage from './components/ResultsPage'
import Options from './components/Options'
import React from 'react'

function App() {
  return (
    <div className='page-container'>
    <div className='plane'>
      <img src='../plane1.png' alt='plane' />
    </div>
    <div className='container'>
      <Options />
      <ResultsPage />
    </div>
    </div>
  )
}

export default App
