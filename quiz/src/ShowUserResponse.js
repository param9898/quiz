import React, { useEffect, useState } from "react";
import axios from "axios";
import { HeaderNav } from "./HeaderNav";

export const ShowUserResponse = () => {
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUserResponses();
  }, []);

  const fetchUserResponses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/user-answers"
      );
      setResponses(response.data);
    } catch (error) {
      setError("Failed to fetch user responses");
    }
  };

  return (
    <div>
      <HeaderNav />
      <div className="container">
        <h2 className="mt-4 mb-3">User Responses</h2>
        {responses.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>User</th>
                <th>Question</th>
                <th>Selected Option</th>
                <th>Correct Option</th>
              </tr>
            </thead>
            <tbody>
              {responses.map((response) => (
                <tr key={response.id}>
                  <td>{response.users.username}</td>
                  <td>{response.questions.questionText}</td>
                  <td>{response.selectedOption}</td>
                  <td>{response.questions.correctOption}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No user responses found</p>
        )}
        {error && <div className="text-danger mt-2">{error}</div>}
      </div>
    </div>
  );
};

export default ShowUserResponse;