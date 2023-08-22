const results = [
  { id: 1, name: "Bulbasaur", type: "Grass", about: "lorem" },
  { id: 2, name: "Pikachu", type: "Electric", about: "lorem" },
  { id: 3, name: "Charmander", type: "Fire", about: "lorem" },
  { id: 4, name: "Squirtle", type: "Water", about: "lorem" },
  { id: 5, name: "Eevee", type: "Normal", about: "lorem" },
  { id: 6, name: "Croagunk", type: "Poison", about: "lorem" },
];

const questions = [
  {
    id: 1,
    text: "Of these colors which is your favorite?",
    options: [
        { text: "Green", score: 1 },
        { text: "Yellow", score: 2 },
        { text: "Red", score: 3 },
        { text: "Blue", score: 4 },
        { text: "Purple", score: 5 },
    ],
  },
  {
    id: 2, 
    text: "Where would you do on a dream vacation?",
    options: [
        { text: "Beach", score: 4 },
        { text: "Mountains", score: 2 },
        { text: "Grand Canyon", score: 5 },
        { text: "Historical Site", score: 1 },
        { text: "Volcano", score: 3 }
    ]
  },
//   {
//     id: , 
//     text: ,
//     options: [
//         {
//             text: ,
//             score: }
//     ]
//   }
];
// export default function getQuestion(id) {
//   const question = questions.find((question) => question.id === id);

//   //need to display questions dynamically
// }

export default questions