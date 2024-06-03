// eslint-disable-next-line react/prop-types
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/Error";

// eslint-disable-next-line react/prop-types
function QuestionsList({ questions = [] }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswerClick = (answer) => {
    if (!answer.length) return null;
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestionIndex + 1 < questions?.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/results", { state: { questions, userAnswers } });
    }
  };

  const isValid =
    questions?.length &&
    typeof currentQuestionIndex == "number" &&
    questions[currentQuestionIndex];
  const currentQuestion = questions[currentQuestionIndex];

  if (!isValid) return <ErrorMessage error="No questions present" />;

  return (
    <div className="font-mono flex flex-col items-center justify-center h-[100%]">
      <h2 className=" text-[30px] text-black max-md:text-[25px] font-mono text-center font-bold">
        {currentQuestion?.category}
      </h2>

      <div className="border-2  w-[70%] max-sm:w-[80%] border-black p-8  max-sm:p-[20px] mt-[20px] text-center ">
        Question {currentQuestionIndex + 1}: {currentQuestion?.question}
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
        {currentQuestionIndex + 1} of {questions?.length}
      </h2>
    </div>
  );
}

export default QuestionsList;
