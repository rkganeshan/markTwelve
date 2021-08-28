import { useState } from "react";
import "./styles.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Hypotenuse = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const [result, setResult] = useState(
    "Enter the inputs to calculate hypotenuse"
  );

  const clickHandler = () => {
    if (a <= 0 || b <= 0) {
      setResult("Please provide valid inputs");
    } else {
      const res = Math.sqrt(Number(a) * Number(a) + Number(b) * Number(b));
      const hyp = res.toPrecision(4);
      setResult(`Hypotenuse is: ${hyp}`);
    }
  };

  return (
    <div className="Hypotenuse">
      <NavBar />
      <div className="container mt-5">
        <h3 className="font-weight-bold h1">
          Calculate Hypotenuse of a triangle
        </h3>
      </div>
      <div className="container mt-5">
        <div className="font-weight-bold" style={{ fontSize: "27px" }}>
          Enter base value (a) =
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
          Enter height value (b) =
        </div>
        <input
          className="mt-3 ip"
          type="text"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="container mt-5">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={clickHandler}
        >
          <span className="h4">Calculate</span>
        </button>
      </div>
      <div className="container mt-4">
        <p className="font-weight-bold" style={{ fontSize: "30px" }}>
          Hypotenuse formula:
        </p>
        <p className="font-weight-bold" style={{ fontSize: "25px" }}>
          √(base² + height²)
        </p>
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

export default Hypotenuse;
