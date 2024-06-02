import { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function QuestionsList({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();

  console.log(questions);

  const handleAnswerClick = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/results", { state: { questions, userAnswers } });
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div className="font-mono flex flex-col items-center justify-center py-[50px] ">
      <h2 className=" text-[30px] text-black max-md:text-[25px] font-mono text-center font-bold">
        {questions[currentQuestionIndex].category}
      </h2>

      <div className="border-2  w-[70%] border-black p-8 mt-[20px] ">
        Question {currentQuestionIndex + 1}:{" "}
        {questions[currentQuestionIndex].question}
        <div className="flex space-x-6 justify-center pt-[30px]">
          <button
            onClick={() => handleAnswerClick("True")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {" "}
            True{" "}
          </button>
          <button
            onClick={() => handleAnswerClick("False")}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            {" "}
            False{" "}
          </button>
        </div>
      </div>

      <h2 className="text-center text-[25px] pt-[50px]">
        {currentQuestionIndex + 1} of {questions.length}
      </h2>
    </div>
  );
}

export default QuestionsList;
