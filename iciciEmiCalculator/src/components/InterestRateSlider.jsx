import React from "react";
import "../css/InterestRateSlider.css";

function InterestRateSlider({ interestRate, setInterestRate }) {
  return (
    <div className="interest-rate-slider">
      <div className="InterestRateSlider">
        <p>
          Illustrative&nbsp;
          <span style={{ color: "orangered" }}>Interest Rate</span>&nbsp;p.a.
        </p>
        <p className="LoanAmountvalue">₹{interestRate}</p>
      </div>
      <input
        type="range"
        min="1"
        max="20"
        value={interestRate}
        onChange={(e) => setInterestRate(parseFloat(e.target.value))}
      />
    </div>
  );
}

export default InterestRateSlider;
