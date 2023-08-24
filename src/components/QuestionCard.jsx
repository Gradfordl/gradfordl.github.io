import { useParams, useNavigate} from "react-router-dom";
import questions from "../data";

function QuestionCard({total, setTotal}) {
  const params = useParams();
  const navigate = useNavigate();   

  let currentQuestion = questions.find((question) => {
    // console.log(question.text);
    return params.id == question.id;
  });

  function nextQuestion(score) {
    navigate(`/questions/${parseInt(params.id) + 1}`);
    updateTotal(score);
  }

  function updateTotal(score) {
    setTotal(total + score);
  }
  console.log(total);

  return (
    <div className="question-card">
      <h2>{currentQuestion.text}</h2>
      <img src={currentQuestion.image} alt={currentQuestion.alt} />
      <div className="button-container">
        <button onClick={() => nextQuestion(currentQuestion.options[0].score)}>
          {currentQuestion.options[0].text}
        </button>
        <button onClick={() => nextQuestion(currentQuestion.options[1].score)}>
          {currentQuestion.options[1].text}
        </button>
        <button onClick={() => nextQuestion(currentQuestion.options[2].score)}>
          {currentQuestion.options[2].text}
        </button>
        <button onClick={() => nextQuestion(currentQuestion.options[3].score)}>
          {currentQuestion.options[3].text}
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
