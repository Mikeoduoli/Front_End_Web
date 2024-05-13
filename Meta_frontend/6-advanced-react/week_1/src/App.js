// import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Form Submitted");
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    if(Number (score) <= 5 && comment.length <= 10){
      alert("Please provide a comment your experience.");
      return;
    }
    console.log("Form Submitted!");
    setComment(""); //Reseting form values after submission
    setScore("10"); //Reseting form values after submission
  };

  return (
    <>
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
          </div>
          <button disabled={!name}>Submit</button>
        </fieldset>
      </form>
    </div>

    <div className="App">
      <form onSubmit={handleSubmit2}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className="Field">
            <label>Score: {score}★</label>
            <input
              type="range"
              min="0"
              max="10"
              value={score} onChange={e => setScore(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Comment:</label>
            <textarea value={comment} onChange={e => setComment(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
    </>
  );
}

export default App;
