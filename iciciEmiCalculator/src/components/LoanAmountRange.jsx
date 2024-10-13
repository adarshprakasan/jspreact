import React, { useState, useEffect } from "react";
import "../css/LoanAmountRange.css";

function LoanAmountRange({ loanAmount, setLoanAmount }) {
  let [range, setRange] = useState(1);
  let [minValue, setMinValue] = useState(2000000);
  let [maxValue, setMaxValue] = useState(2000000);

  useEffect(() => {
    if (range === 1) {
      setMinValue(10);
      setMaxValue(10000000);
    } else if (range === 2) {
      setMinValue(10000000);
      setMaxValue(50000000);
    } else {
      setMinValue(50000000);
      setMaxValue(300000000);
    }
  }, [range]);

  let handleRangeChange = (value) => {
    setRange(value);
    if (value === 1) {
      setLoanAmount(2000000);
    } else if (value === 2) {
      setLoanAmount(3000000);
    } else {
      setLoanAmount(15000000);
    }
  };

  let handleLoanAmountChange = (value) => {
    setLoanAmount(value);

    if (range === 2 && value < 10000000) {
      setRange(2);
      setLoanAmount(2000000);
    } else if (range === 3 && value < 50000000) {
      setRange(3);
      setLoanAmount(3000000);
    }
  };

  return (
    <section className="LoanAmountRangesection">
      <div className="loanamntrange">Select the loan amount range</div>
      <div className="money">
        <input
          type="radio"
          name="loan-range"
          value="1"
          checked={range === 1}
          onChange={(e) => handleRangeChange(parseInt(e.target.value))}
        />
        <label>0 - 1 Crore</label>
        <input
          type="radio"
          name="loan-range"
          value="2"
          checked={range === 2}
          onChange={(e) => handleRangeChange(parseInt(e.target.value))}
        />
        <label>1 Crore -5 Crore</label>
        <input
          type="radio"
          name="loan-range"
          value="3"
          checked={range === 3}
          onChange={(e) => handleRangeChange(parseInt(e.target.value))}
        />
        <label>5 Crore - 30 Crore</label>
      </div>
      <div className="LoanAmountRangebutton">
        <p>Loan Amount</p>
        <p className="LoanAmountvalue"> ₹{loanAmount}</p>
        <div className="LoanAmountRangebut">
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={loanAmount}
            onChange={(e) => handleLoanAmountChange(parseInt(e.target.value))}
          />
        </div>
      </div>
    </section>
  );
}

export default LoanAmountRange;
