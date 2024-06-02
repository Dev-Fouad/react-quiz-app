// eslint-disable-next-line react/prop-types
import { useEffect, useState } from "react";
import QuestionsList from "./QuestionsList";
import ErrorMessage from "../../components/Error";
import Loader from "../../components/Loader";
import fetchQuestions from "../../utils/ApiService";

function Quizpage() {
  const [isloading, setisLoading] = useState(true);
  const [error, setError] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    InitializeQuestion();
  }, []);

  async function InitializeQuestion() {
    const { result, error } = await fetchQuestions();
    setQuestions(result);
    setError(error);
    setisLoading(false);
  }

  if (isloading) return <Loader />;

  return (
    <div>
      {!isloading && !error && <QuestionsList questions={questions} />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

export default Quizpage;
