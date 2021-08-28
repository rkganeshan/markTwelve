import { useState } from "react";
import "./styles.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Area = () => {
  const [side1, setSide1] = useState(0);
  const [side2, setSide2] = useState(0);
  const [side3, setSide3] = useState(0);
  const [result, setResult] = useState(
    "Enter the inputs to find the area of triangle"
  );

  const handleClick = () => {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      setResult("Please provide valid inputs");
    } else if (
      Number(side1) + Number(side2) < Number(side3) ||
      Number(side3) + Number(side3) < Number(side1) ||
      Number(side1) + Number(side3) < Number(side2)
    ) {
      setResult(
        "Sum of the length of two sides can't be less than length of the third side"
      );
    } else {
      let s = (Number(side1) + Number(side2) + Number(side3)) / 2;

      setResult(
        `Resultant Area is: ${Math.sqrt(
          s * (s - side1) * (s - side2) * (s - side3)
        ).toFixed(2)}`
      );
    }
  };

  return (
    <div className="Area">
      <NavBar />
      <div className="container mt-5">
        <h3 className="font-weight-bold h1">Calculate Area of a Triangle</h3>
      </div>
      <div className="container mt-5">
        <div className="font-weight-bold" style={{ fontSize: "27px" }}>
          Enter first side of a triangle
        </div>
        <input
          className="mt-3 ip"
          type="text"
          value={side1}
          onChange={(e) => setSide1(e.target.value)}
        />
      </div>
      <div className="container mt-3">
        <div className="font-weight-bold" style={{ fontSize: "27px" }}>
          Enter second side of a triangle
        </div>
        <input
          className="mt-3 ip"
          type="text"
          value={side2}
          onChange={(e) => setSide2(e.target.value)}
        />
      </div>
      <div className="container mt-3">
        <div className="font-weight-bold" style={{ fontSize: "27px" }}>
          Enter third side of a triangle
        </div>
        <input
          className="mt-3 ip"
          type="text"
          value={side3}
          onChange={(e) => setSide3(e.target.value)}
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

export default Area;
