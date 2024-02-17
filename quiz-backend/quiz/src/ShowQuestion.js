import React, { useEffect, useState } from "react";
import axios from "axios";
import { HeaderNav } from "./HeaderNav";
import EditQuestionModal from "./EditQuestionModal";

export const ShowQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [editedQuestion, setEditedQuestion] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/questions/getAllQuestion"
      );
      setQuestions(response.data);
    } catch (error) {
      setError("Failed to fetch questions");
    }
  };

  const handleDeleteQuestion = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/questions/${id}`);
      fetchQuestions(); // Refresh the question list
    } catch (error) {
      setError("Failed to delete question");
    }
  };

  const handleEditQuestion = (question) => {
    setEditedQuestion(question);
    setShowEditModal(true);
  };

  const handleUpdateQuestion = async (updatedQuestion) => {
    try {
      await axios.put(
        `http://localhost:8080/api/questions/${updatedQuestion.id}`,
        updatedQuestion
      );
      fetchQuestions(); // Refresh the question list
      setShowEditModal(false); // Close the edit modal
    } catch (error) {
      setError("Failed to update question");
    }
  };

  return (
    <div>
      <HeaderNav />
      <div className="container">
        <h2 className="mt-4 mb-3">Show Questions</h2>
        {questions.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Question</th>
                <th>Option1</th>
                <th>Option2</th>
                <th>Option3</th>
                <th>Option4</th>
                <th>Correct Solution</th>
                <th>Technology</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr key={question.id}>
                  <td>{question.questionText}</td>
                  <td>{question.option1}</td>
                  <td>{question.option2}</td>
                  <td>{question.option3}</td>
                  <td>{question.option4}</td>
                  <td>{question.correctOption}</td>
                  <td>{question.technology}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteQuestion(question.id)}
                    >
                      Delete
                    </button>{" "}
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEditQuestion(question)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No questions found</p>
        )}
        {showEditModal && (
          <EditQuestionModal
            question={editedQuestion}
            onUpdateQuestion={handleUpdateQuestion}
            onClose={() => setShowEditModal(false)}
          />
        )}
        {error && <div className="text-danger mt-2">{error}</div>}
      </div>
    </div>
  );
};

export default ShowQuestions;