import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/reusables/LoadingSpinner";
import QuestionsList from "./QuestionsList";

function Quizpage() {
  // State hooks for managing loading status, error messages, and questions data
  const [isloading, setisLoading] = useState(false);
  const [error, setError] = useState("");
  const [questions, setQuestions] = useState([]);

  // useEffect hook for fetching questions when the component mounts
  useEffect(() => {
    async function fetchQuestions() {
      try {
        // Set loading state to true before starting the fetch operation
        setisLoading(true);

        // Fetch questions from the API
        const res = await fetch(
          "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
        );

        // Throw an error if the response is not ok
        if (!res.ok)
          throw new Error("Something went wrong with fetching questions");

        // Parse the JSON data from the response
        const data = await res.json();

        // Set the questions state with the fetched data
        setQuestions(data.results);
      } catch (err) {
        // Log the error and set the error state
        console.err(err.message);
        setError(err.message);
      } finally {
        // Set loading state to false after the fetch operation completes
        setisLoading(false);
      }
    }

  // Call the fetchQuestions function
    fetchQuestions();
  }, []);

  function Loader() {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  // eslint-disable-next-line react/prop-types
  function ErrorMessage({ message }) {
    return <p>{message}</p>;
  }

  return (
    <div>
      {isloading && <Loader />}
      {!isloading && !error && (
        <QuestionsList />
      )}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

export default Quizpage;
