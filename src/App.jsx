import { useState } from 'react'
import Pokemon from './components/Pokemon'
import './App.css'
import StartQuiz from './components/StartQuiz'
import pokemonArray from './data'

function App() {

  return (
    <div className='App'>
    {/* Header */}
      <h1>Pokemon Personality Quiz</h1>
      {/* <StartQuiz/> */}
    {/* Question Card */}
    <div className='question-card'>
      <h2>Question Goes Here!</h2>
      {/* use <Link/> & onClick on link*/ }
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        <li>Option 4</li>
      </ul>
    </div>

    {/* Final Result - Get your Pokemon */}
    <h2>Your Starter Pokemon is...</h2>
    <h1> [pokemon name] !</h1>
    {/* <img src={img}/> */}



      <Pokemon/>
    </div>
  )
}

export default App
