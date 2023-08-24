import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import questions from "../data";

function QuestionCard() {
  const [question, setQuestion] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  let currentQuestion = questions.find((question) => {
    console.log(question.text);
    return params.id == question.id;
  });

  function nextQuestion() {
    navigate(`/questions/${parseInt(params.id) + 1}`);
  }

  return (
    <div className="question-card">
      <h2>QUESTION.TEXT</h2>
      <div className="button-container">
        <button onClick={nextQuestion}>QUESTION.OPTIONS.TEXT</button>
        <button onClick={nextQuestion}>QUESTION.OPTIONS.TEXT</button>
        <button onClick={nextQuestion}>QUESTION.OPTIONS.TEXT</button>
        <button onClick={nextQuestion}>QUESTION.OPTIONS.TEXT</button>
      </div>
    </div>
  );
}

export default QuestionCard;
