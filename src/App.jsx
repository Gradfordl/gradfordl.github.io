import { Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Pokemon from './components/Pokemon'
import './App.css'
import StartQuiz from './components/StartQuiz'
import QuestionCard from "./components/QuestionCard";
import Header from "./components/Header";

function App() {

  return (
    <div className='App'>
      <Header/>
      <StartQuiz/>
      <Routes>
        <Route path="questions/:id" element={<QuestionCard/>}/>
      </Routes>
  


    {/* Final Result - Get your Pokemon */}
    <h2>Your Starter Pokemon is...</h2>
    <h1> [pokemon name] !</h1>
    {/* <img src={img}/> */}



      <Pokemon/>
    </div>
  )
}

export default App
