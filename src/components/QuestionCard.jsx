import { useParams, Link } from "react-router-dom";
import questions from "../data";

function QuestionCard() {
  const params = useParams();

  questions.find((question) => {
    console.log(question.text);
    return params.id == question.id;
  });
  //need to display individual question text and options on screen

  return (
    <div className="question-card">
      <h2>QUESTION TEXT</h2>
      {/* use <Link/> & onClick on link*/}
      {/* <Link to={`/questions/${id}`}> ????? */}
      {/* //initial setup for routes to questions */}
      <Link to="/questions/2">
        <div>QUESTION OPTION TEXT</div>
      </Link>
      <Link to="/questions/3">
        <div>QUESTION OPTION TEXT</div>
      </Link>
      <Link to="/questions/4">
        <div>QUESTION OPTION TEXT</div>
      </Link>
      <Link to="/questions/5">
        <div>QUESTION OPTION TEXT</div>
      </Link>
      <Link to="/questions/6">
        <div>QUESTION OPTION TEXT</div>
      </Link>
      {/* <ul>
  <li>Option 1</li>
  <li>Option 2</li>
  <li>Option 3</li>
  <li>Option 4</li>
</ul> */}
    </div>
  );
}

export default QuestionCard;
