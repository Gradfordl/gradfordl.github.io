import { Route, Routes } from "react-router-dom";
import StartQuiz from './components/StartQuiz'
import QuestionCard from "./components/QuestionCard";
import Header from "./components/Header";
import './App.css'
import questions from "./data";


function App(props) {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route key={0} path="/" element={<StartQuiz/>} />
      {/* {questions.map(question =>
        <Route
          key={question.id}
          path={`/questions/:${question.id}`}
          element={<QuestionCard questions={questions} />}
        />)} */}
        <Route path="/questions/:id" element={<QuestionCard/>} />
      </Routes>
     
  


    {/* Final Result - Get your Pokemon */}
    {/* <h2>Your Starter Pokemon is...</h2>
    <h1> [pokemon name] !</h1> */}
    {/* <img src={img}/> */}



    </div>
  )
}

export default App
