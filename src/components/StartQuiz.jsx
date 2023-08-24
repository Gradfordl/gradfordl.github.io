import { Link } from "react-router-dom";
import React from 'react';
export default function StartQuiz() {

	return (
		<div>
            <h1>Welcome!</h1>
            <p></p>
            <Link to="/questions/1">
            <button>Start Quiz</button>
            </Link>
        </div>
	);
}
