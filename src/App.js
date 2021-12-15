import ResultsPage from './components/ResultsPage'
import Options from './components/Options'
import React from 'react'
import plane from './components/logos/plane1.png'


function App() {
  return (
    <div className='pg-container'>
      <div className='plane'>
        <img src={plane} alt='plane' />
      </div>
      <div className='results-container'>
        <Options />
        <ResultsPage />
      </div>
    </div>
  )
}

export default App
