import { useState } from "react";
import "./styles.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import questions from "./questions";
const Quiz = () => {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([
    "scalene",
    "equilateral",
    "35sqcm",
    "scalene",
    "scalene",
    "scalene",
    "scalene",
    "area",
    "altitude",
    "3"
  ]);

  const turn = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };

  const ans = [
    "equilateral",
    "isosceles",
    "35sqcm",
    "obtuse",
    "acute",
    "isosceles",
    "right",
    "perimeter",
    "hypotenuse",
    "5"
  ];

  let score = 0;

  const handleChange = (e) => {
    let x = arr;
    x[turn[e.target.id]] = e.target.value;
    setArr((arr) => [...x]);
  };
  const handleSubmit = (e) => {
    let result = 0;
    let x = document.querySelectorAll('.questions');
    for (let i = 0; i < 10; i++) {
      if (arr[i] === ans[i]) {
        x[i].classList.add('correct')
        result += 1;
      } else {
        x[i].classList.add('incorrect')
      }
    }
    score = result;
    setText(`Your score is ${score} out of 10`);
  }

  return (
    <div className="Quiz">
      <NavBar />

      <div className="container">
        <div className="font-weight-bold h3 mt-4">Quiz on Triangles</div>
        <div className="font-weight-bold h5 mt-4">
          For each correct answer you will get 1 point.
        </div>
      </div>

      <div className="container mt-5 question-container">
        {questions.map((question) => {
          return (
            <div key={question.id} className="questions">
              <label>{question.question}</label>
              <select
                id={question.id}
                value={arr[turn[question.id]]}
                onChange={handleChange}
              >
                <option value={question.options[0]}>
                  {question.options[0]}
                </option>
                <option value={question.options[1]}>
                  {question.options[1]}
                </option>
                <option value={question.options[2]}>
                  {question.options[2]}
                </option>
                <option value={question.options[3]}>
                  {question.options[3]}
                </option>
              </select>
            </div>
          );
        })}
      </div>
      <button className="quiz_button" onClick={handleSubmit}>
        Submit
      </button>
      <p className="result">{text}</p>

      <Footer />
    </div>
  );
};

export default Quiz;
