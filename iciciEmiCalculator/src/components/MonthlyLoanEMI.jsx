import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "../css/MonthlyLoanEMI.css";

let MonthlyLoanEMI = ({ loanAmount, interestRate, tenure }) => {
  let monthlyInterestRate = interestRate / (12 * 100);

  let numberOfMonths = tenure * 12;

  let EMI =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
    (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

  let totalAmountPaid = EMI * numberOfMonths;
  let interestAmount = totalAmountPaid - loanAmount;

  let data = [
    { name: "Principal Amount", value: loanAmount },
    { name: "Interest Amount", value: interestAmount },
  ];

  let COLORS = ["#FF6347", "#FFCE56"];

  return (
    <section className="section">
      <div className="monthlyLoan">
        <div className="monthlyLoanFirstbox">
          <div className="Total">
            <span>Principal Amount </span>
            <span style={{ fontWeight: "bolder" }}>
              ₹{loanAmount.toLocaleString()}
            </span>
          </div>
          <div className="Total">
            <span>Interest Amount </span>
            <span style={{ fontWeight: "bolder" }}>
              ₹{interestAmount.toFixed(0)}
            </span>
          </div>
          <div className="Total">
            <span>Total Amount Payable:</span>
            <span style={{ fontWeight: "bolder" }}>
              ₹{totalAmountPaid.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="pi">
          <PieChart style={{ display: "block" }} width={400} height={250}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>
      <div className="Monthlyemi">
        <p>
          Your Monthly EMI is{" "}
          <span style={{ fontSize: "24px", fontWeight: "bolder" }}>
            {" "}
            ₹{EMI.toFixed(0)}
          </span>
        </p>
      </div>
      <button className="Apply">
        <h3>Apply for home loan</h3>
      </button>
    </section>
  );
};

export default MonthlyLoanEMI;
