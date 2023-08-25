import { Link } from "react-router-dom";
import React from 'react';
export default function StartQuiz() {

	return (
		<div>
            <h1>Hello!</h1>
            <p>Welcome to The Pokemon Personality Quiz! Let's find out what pokemon you have the most in common with! Press 'Start Quiz' to begin!</p>
            <Link to="/questions/1">
            <button>Start Quiz</button>
            </Link>
        </div>
	);
}
