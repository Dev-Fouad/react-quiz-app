import React, { useEffect, useState } from "react";

function Quizpage() {
  // uSE STATE  hook
  const [isloading, setisLoading] = useState(false);
  const [error, setError] = useState("");
  const [questions, setQuestions] = useState([]);

  // use Effect hook
  useEffect(() => {
    async function fetchQuestions() {
      try {
        setisLoading(true);
        const res = await fetch(
          "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching questions");

        const data = await res.json();
        setQuestions(data);

      } catch (err) {  
        console.err(err.message);
        setError(err.message)
      }
      finally{
        setisLoading(false)
      }
    }

    fetchQuestions();
  }, []);


  function Loader(){
    return <p>Loading...</p>
  }

  // eslint-disable-next-line react/prop-types
  function ErrorMessage({message}) {
    return <p>{message}</p>
  } 

  

  return <div>
    <p>WELCOME</p>
    {/* {isloading ? <Loader  />: "juy"} */}
    { isloading && !error && <p>Questions</p>}
    { error && <ErrorMessage message={error} />}
    
  </div>;
}

export default Quizpage;
