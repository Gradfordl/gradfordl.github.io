import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import questions from "../data";

function QuestionCard() {
  const params = useParams();

//   let question = questions.find((question) => {
//     console.log(question.text);
//     return params.id == question.id;
//   });
const [question, setQuestion] = useState(null)

  
  for ( let i = 0; i < questions.length; i++) {
    let currentQuestion =  questions[i];
    console.log(questions)
   
  }


    //need to display individual question text and options on screen

  return (
    <div className="question-card">
      <h2>TEXT</h2>

      {/* <Link to={`/questions/${id}`}> ????? */}

      <Link to={`/questions/2`}> 
        <div>HELLO</div>
      </Link>
    </div>
  );
}

export default QuestionCard;
