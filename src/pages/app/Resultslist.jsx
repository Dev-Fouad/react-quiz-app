// eslint-disable-next-line react/prop-types
function Resultslist({ question, userAnswer, correctAnswer, index }) {
  const isCorrect = userAnswer === correctAnswer;

  return (
    <li
      className={`mb-2 p-2 rounded ${
        isCorrect ? "bg-green-100" : "bg-red-100"
      }`}
    >
      <p>
        <strong>Q{index + 1}:</strong> {question}
      </p>
      <p>
        <strong>Your Answer:</strong> {userAnswer}
      </p>
      <p>
        <strong>Correct Answer:</strong> {correctAnswer}
      </p>
    </li>
  );
}

export default Resultslist;
