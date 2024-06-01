import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/app/Homepage";
import Quizpage from "../pages/app/Quizpage";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={ <Quizpage />} />
      </Routes>
    </Router>
  );
}

export default Routers;
