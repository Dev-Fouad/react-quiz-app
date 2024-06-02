import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/app/Homepage";
// import Quizpage from "../pages/app/Quizpage";
import QuestionsList from "../pages/app/QuestionsList";
import Resultspage from "../pages/app/Resultspage";

function Routers() {
  const questions = [
    {
      type: "boolean",
      difficulty: "hard",
      category: "History",
      question: "The man that shot Alexander Hamilton was named Aaron Burr.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },

    {
      type: "boolean",
      difficulty: "hard",
      category: "Entertainment: Video Games",
      question:
        "In The Witcher 3, the Zoltan Chivay Gwent card can be found under the Hanged Man&#039;s Tree.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },

    {
      type: "boolean",
      difficulty: "hard",
      category: "Geography",
      question:
        "The two largest ethnic groups of Belgium are Flemish and Walloon. ",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },

    {
      type: "boolean",

      difficulty: "hard",

      category: "Entertainment: Video Games",

      question: "Unturned originally started as a Roblox game.",

      correct_answer: "True",

      incorrect_answers: ["False"],
    },

    {
      type: "boolean",

      difficulty: "hard",

      category: "Science: Mathematics",

      question:
        "L&#039;H&ocirc;pital was the mathematician who created the homonymous rule that uses derivatives to evaluate limits with indeterminations.",

      correct_answer: "False",

      incorrect_answers: ["True"],
    },

    {
      type: "boolean",

      difficulty: "hard",

      category: "Science: Mathematics",

      question:
        "If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.",

      correct_answer: "True",

      incorrect_answers: ["False"],
    },

    {
      type: "boolean",

      difficulty: "hard",

      category: "Entertainment: Video Games",

      question:
        "In &quot;Portal 2&quot;, Cave Johnson started out Aperture Science as a shower curtain company.",

      correct_answer: "True",

      incorrect_answers: ["False"],
    },

    {
      type: "boolean",

      difficulty: "hard",

      category: "Entertainment: Japanese Anime &amp; Manga",

      question:
        "In the &quot;To Love-Ru&quot; series, Peke is considered a female robot.",

      correct_answer: "True",

      incorrect_answers: ["False"],
    },

    {
      type: "boolean",

      difficulty: "hard",

      category: "General Knowledge",

      question:
        "&quot;Number 16 Bus Shelter&quot; was a child&#039;s name that was approved by the New Zealand government.",

      correct_answer: "True",

      incorrect_answers: ["False"],
    },

    {
      type: "boolean",

      difficulty: "hard",

      category: "History",

      question:
        "The fourth funnel of the RMS Titanic was fake designed to make the ship look more powerful and symmetrical.",

      correct_answer: "True",

      incorrect_answers: ["False"],
    },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<QuestionsList questions={questions} />} />
        <Route path="/results" element={<Resultspage />} />
      </Routes>
    </Router>
  );
}

export default Routers;
