import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
import AdminLogin from "./AdminLogin";
import ShowQuestions from "./ShowQuestion";
import QuizGenerator from "./QuizGenerator";
import QuizPage from "./QuizPage";
import SignUp from "./Signup";
import ShowUserResponse from "./ShowUserResponse";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/user" element={<QuizPage />} />
        <Route path="/admin/show-question" element={<ShowQuestions />} />
        <Route path="/admin/generate-quiz" element={<QuizGenerator />} />
        <Route path="/admin/validate-answer" element={<ShowUserResponse />} />
      </Routes>
    
  );
}

export default App;
