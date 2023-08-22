import { useParams, Link } from "react-router-dom";
import questions from "../data";

function QuestionCard() {
    const params = useParams();

    questions.find((question) => {
        return params.id == question.id
    })
    
  return (
<div className='question-card'>
<h2>Question Goes Here!</h2>
{/* use <Link/> & onClick on link*/ }
<Link to="/questions/2">OPTION 1</Link>

{/* <ul>
  <li>Option 1</li>
  <li>Option 2</li>
  <li>Option 3</li>
  <li>Option 4</li>
</ul> */}

</div>
  )
}

export default QuestionCard
