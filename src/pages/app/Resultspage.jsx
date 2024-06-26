import { useLocation, useNavigate } from "react-router-dom";
import Resultslist from "./Resultslist";

function Resultspage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions, userAnswers } = location.state;

  const correctAnswersCount = userAnswers.filter(
    (answer, index) => answer === questions[index]?.correct_answer
  ).length;


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="mb-4">
          Your Score: {correctAnswersCount} / {questions?.length}
        </p>
        <ul className="text-left mb-4">
          {questions.map((question, index) => (
            <Resultslist
              key={index}
              question={question?.question}
              userAnswer={userAnswers[index]}
              correctAnswer={question?.correct_answer}
              index={index}
            />
          ))}
        </ul>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}

export default Resultspage;
