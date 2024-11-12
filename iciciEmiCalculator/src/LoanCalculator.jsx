import React, { useEffect, useState } from "react";
import InterestRateSlider from "./components/InterestRateSlider";
import LoanAmountRange from "./components/LoanAmountRange";
import TenureSlider from "./components/TenureSlider";
import MonthlyLoanEMI from "./components/MonthlyLoanEMI";
import "./LoanCalculator.css";

let LoanCalculator = () => {
  let [loanAmount, setLoanAmount] = useState(2000000);
  let [interestRate, setInterestRate] = useState(8.75);
  let [tenure, setTenure] = useState(1);
  let [monthlyEMI, setMonthlyEMI] = useState(0);

  useEffect(() => {
    let r = interestRate / 12 / 100;
    let n;
    if (tenure === 0) {
      n = tenure + 1 * 12;
    } else {
      n = tenure * 12;
    }
    let emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyEMI(emi);
  }, [loanAmount, interestRate, tenure]);
  
  let emi = Math.ceil(monthlyEMI);

  return (
    <>
      <div className="main">
        <div className="inner">
          <div className="firstbox">
            <LoanAmountRange
              loanAmount={loanAmount}
              setLoanAmount={setLoanAmount}
            />
            <InterestRateSlider
              interestRate={interestRate}
              setInterestRate={setInterestRate}
            />
            <TenureSlider tenure={tenure} setTenure={setTenure} />
          </div>
          <div className="secondbox">
            <MonthlyLoanEMI
              loanAmount={loanAmount}
              interestRate={interestRate}
              tenure={tenure}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanCalculator;
