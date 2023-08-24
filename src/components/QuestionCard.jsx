import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import questions from "../data";

function QuestionCard() {
  const params = useParams();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0)

  let currentQuestion = questions.find((question) => {
    // console.log(question.text);
    return params.id == question.id;
  });

  function nextQuestion() {
    navigate(`/questions/${parseInt(params.id) + 1}`);
    updateTotal()
  }

  function updateTotal() {
    let score = currentQuestion.options.score
    setTotal(total + score)
  }
console.log(total)
  return (
    <div className="question-card">
      <h2>{currentQuestion.text}</h2>
      <div className="button-container">
        <button onClick={nextQuestion}>{currentQuestion.options[0].text}</button>
        <button onClick={nextQuestion}>{currentQuestion.options[1].text}</button>
        <button onClick={nextQuestion}>{currentQuestion.options[2].text}</button>
        <button onClick={nextQuestion}>{currentQuestion.options[3].text}</button>
      </div>
    </div>
  );
}

export default QuestionCard;
