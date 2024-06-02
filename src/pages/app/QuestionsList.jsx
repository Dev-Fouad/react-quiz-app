import { useState } from "react";

// eslint-disable-next-line react/prop-types,
function QuestionsList({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(9);
  // const [userAnswers, setUserAnswers] = useState([]);
  // const [quizCompleted, setQuizCompleted] = useState(false);

  console.log(questions[currentQuestionIndex].question);
  // eslint-disable-next-line react/prop-types
  // console.log(questions[currentQuestionIndex].category);

  return (
    <div className="font-mono flex flex-col items-center justify-center py-[50px] ">
      <h2 className=" text-[30px] text-black max-md:text-[25px] font-mono text-center font-bold">
        {questions[currentQuestionIndex].category}
      </h2>

      <div className="border-2  w-[70%] border-black p-8 "></div>

      <div className="flex space-x-6 justify-center pt-[50px]">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          {" "}
          True{" "}
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          {" "}
          False{" "}
        </button>
      </div>

      <h2 className="text-center text-[25px] pt-[50px]">
        {currentQuestionIndex + 1} of {questions.length}
      </h2>
    </div>
  );
}

export default QuestionsList;
