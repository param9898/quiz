import React, { useState } from "react";

const EditQuestionModal = ({ question, onUpdateQuestion, onClose }) => {
  const [editedQuestion, setEditedQuestion] = useState(question);

  const handleChange = (e) => {
    setEditedQuestion((prevQuestion) => ({
      ...prevQuestion,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateQuestion(editedQuestion);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Question</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Question:</label>
                <input
                  type="text"
                  name="questionText"
                  value={editedQuestion.questionText}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              {/* Add input fields for other question properties (options, correct solution, etc.) */}
              {/* For example: */}
              <div className="form-group">
                <label>Option 1:</label>
                <input
                  type="text"
                  name="option1"
                  value={editedQuestion.option1}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Option 2:</label>
                <input
                  type="text"
                  name="option2"
                  value={editedQuestion.option2}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Option 3:</label>
                <input
                  type="text"
                  name="option3"
                  value={editedQuestion.option3}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Option 4:</label>
                <input
                  type="text"
                  name="option4"
                  value={editedQuestion.option4}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              {/* Add more option fields as needed */}
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditQuestionModal;