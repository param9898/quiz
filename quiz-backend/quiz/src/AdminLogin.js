 import React, {useEffect, useState} from "react";
import axios from "axios";
import { HeaderNav } from "./HeaderNav";
import { useLocation } from "react-router-dom";
import "./AdminLogin.css"

const AdminLogin = () => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctSolution, setCorrectSolution] = useState("");
  const [technology, setTechnology] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users/hello');
      //setItems(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const location = useLocation();
  const username = location.state?.username;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuestion = {
      questionText: question,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      correctOption: parseInt(correctSolution),
      technology: technology,
    };

    try {
      await axios.post(
        "http://localhost:8080/api/questions/addquestion",
        newQuestion
      );
      // Handle success, e.g., display a success message or update the question list
      console.log("Question added successfully");
      setQuestion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setTechnology("");
      setCorrectSolution("");
    } catch (error) {
      setError("Failed to add question");
    }
  };

  return (
        <div className="main-container">
          <HeaderNav username={username} />
          <div className="container">
            <h2 className="title">Admin Login</h2>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="label">Question:</label>
                <input
                  type="text"
                  className="input"
                  value={question}
                  placeholder="Enter Question"
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="label">Options:</label>
                <input
                  type="text"
                  className="input mb-3"
                  placeholder="Option 1"
                  value={option1}
                  onChange={(e) => setOption1(e.target.value)}
                />
                <input
                  type="text"
                  className="input mb-3"
                  placeholder="Option 2"
                  value={option2}
                  onChange={(e) => setOption2(e.target.value)}
                />
                <input
                  type="text"
                  className="input mb-3"
                  placeholder="Option 3"
                  value={option3}
                  onChange={(e) => setOption3(e.target.value)}
                />
                <input
                  type="text"
                  className="input mb-3"
                  placeholder="Option 4"
                  value={option4}
                  onChange={(e) => setOption4(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="label">Correct Solution:</label>
                <select
                  className="select"
                  value={correctSolution}
                  onChange={(e) => setCorrectSolution(e.target.value)}
                >
                  <option value="">Select Correct Solution</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
              </div>
              <div className="form-group">
                <label className="label">Technology:</label>
                <select
                  type="text"
                  className="input"
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                >
                  <option value="">Select Technology</option>
                  <option value="1">GK</option>
                  <option value="2">Programming</option>
                </select>
              </div>
              <button type="submit" className="btn">
                Add Question
              </button>
              {error && <div className="error">{error}</div>}
            </form>
          </div>
    </div>


  );
};

export default AdminLogin; 