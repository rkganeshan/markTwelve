import { useState } from "react";
import "./styles.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

const IsTriangle = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState(
    "Enter the inputs to check if it forms a triangle or not"
  );

  const handleClick = () => {
    if (a === "" || b === "" || c === "") {
      setResult("Please, Enter all the fields");
    } else if (Number(a) <= 0 || Number(b) <= 0 || Number(c) <= 0) {
      setResult("Enter valid values");
    } else if (
      Number(a) + Number(b) + Number(c) < 180 ||
      Number(a) + Number(b) + Number(c) > 180
    ) {
      setResult("Sorry these angles cannot form a triangle");
    } else if (Number(a) + Number(b) + Number(c) === 180) {
      setResult(
        "Yes, this set of angles can form a triangle. Any set of three angles that add upto 180 degrees can form a triangle except for zeros"
      );
    }
  };
  return (
    <div className="IsTriangle">
      <NavBar />
      <div className="container mt-5">
        <h3 className="font-weight-bold h1">Angles of Triangle</h3>
      </div>
      <div className="container mt-5">
        <div className="font-weight-bold" style={{ fontSize: "27px" }}>
          Angle 1
        </div>
        <input
          className="mt-3 ip"
          type="text"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </div>
      <div className="container mt-3">
        <div className="font-weight-bold" style={{ fontSize: "27px" }}>
          Angle 2
        </div>
        <input
          className="mt-3 ip"
          type="text"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="container mt-3">
        <div className="font-weight-bold" style={{ fontSize: "27px" }}>
          Angle 3
        </div>
        <input
          className="mt-3 ip"
          type="text"
          value={c}
          onChange={(e) => setC(e.target.value)}
        />
      </div>
      <div className="container mt-5">
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          <span className="h4">Let's Check</span>
        </button>
      </div>
      <div className="container mt-4">
        <p className="font-weight-bold" id="res" style={{ fontSize: "30px" }}>
          "{result}"
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default IsTriangle;
