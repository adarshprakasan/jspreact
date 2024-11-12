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
        {/* <p className="LoanAmountvalue">₹{interestRate}</p> */}
        {/* <input
          type="number"
          className="LoanAmountvalue"
          value={interestRate}
          onChange={(e) => {
            setInterestRate(parseInt(e.target.value));
          }}
        /> */}
        <div className="LoanAmountvalue">
          <input
            className="yearInp"
            type="number"
            value={interestRate}
            onChange={(e) => {
              setInterestRate(parseInt(e.target.value));
            }}
            min="1"
          />
          <span>{`%`}</span>
        </div>
      </div>
      <div className="LoanAmountRangebut">
        <input
          type="range"
          min="1"
          max="20"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
}

export default InterestRateSlider;
