import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/app/Homepage";
import Quizpage from "../pages/app/Quizpage";
import Resultspage from "../pages/app/Resultspage";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<Quizpage />} />
        <Route path="/results" element={<Resultspage />} />
      </Routes>
    </Router>
  );
}

export default Routers;
