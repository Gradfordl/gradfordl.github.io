import { Route, Routes } from "react-router-dom";
import StartQuiz from './components/StartQuiz'
import QuestionCard from "./components/QuestionCard";
import Header from "./components/Header";
import Results from "./pages/Results";
import { useState } from "react";
import './App.css'

function App(props) {
  const [total, setTotal] = useState(0);

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" element={<StartQuiz/>} />
        <Route path="/questions/:id" element={<QuestionCard total={total} setTotal={setTotal} />} />
        <Route path="/questions/11" element={<Results total={total} setTotal={setTotal} />} />
      </Routes>


    </div>
  )
}

export default App
