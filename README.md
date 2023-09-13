# Pokemon Personality Quiz 

## About 
    Welcome to The Pokemon Personality Quiz! This quiz asks you a series of fun behavioral and personality questions so see which Pokemon you have a lot in common with!

## Technologies Used
    This project utilizes HTML, CSS, and JavaScript and gets its dynamic functionality using the React JavaScript library. 
    Pokemon information is being drawn from https://pokeapi.co/, a free, easy-to-use API that requires no API key. 
## Approach Taken
    I wanted to be able to dynamically display my question components on one card instead of creating multiple question pages. I wanted to structure it this way so that in the event I wanted to add more questions, I could simply add data to the array instead of having to add new pages to the file. This project is very React-centered, utilizing hooks, BrowserRouter, and more. 
    
## Netlify Live Link
    find-your-poke-personality.netlify.app

## Dependencies
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router": "^6.15.0",
    "react-router-dom": "^6.15.0"

## Stretch Goals
    When I continue working on this project I want to update the functionality to be able to pull the result Pokemon directly from the API instead of using the results array to stage the API call. Maybe allow the user to get a specific type of Pokemon based on question answers, for example, if you like the beach that would narrow you down to water types, or at least eliminate rock types from the result possibilities. I want to make the personality quiz more personable.
