import React, { useState } from "react";
import "../css/TenureSlider.css";

function TenureSlider({ tenure, setTenure }) {
  let [isYearMode, setIsYearMode] = useState(true);

  let handleSliderChange = (e) => {
    let value;
    value = parseInt(e.target.value);
    setTenure(isYearMode ? value : value * 12);
  };

  let toggleMode = () => {
    setIsYearMode(!isYearMode);
  };

  return (
    <div className="tenure-slider">
      <div className="toggle-switch">
        <span style={{ fontSize: "18px" }}>Tenure</span>
        <h4>
          (
          <label>
            <input type="checkbox" checked={isYearMode} onChange={toggleMode} />
            <span className="slider"></span>
          </label>
          <span className="toggle-label">
            {isYearMode ? "Years" : "Months"}
          </span>
          )
        </h4>
      </div>
      {/* <div className="LoanAmountvalue">
        {tenure}
        <span>{isYearMode ? ` Years` : `Months`}</span>
      </div> */}
      <div className="LoanAmountvalue">
        <input
          className="yearInp"
          type="number"
          value={isYearMode ? tenure : Math.floor(tenure / 12)}
          onChange={handleSliderChange}
          min="1"
          max={isYearMode ? "30" : "360"}
        />
        <span>{isYearMode ? ` Years` : ` Months`}</span>
      </div>
      {/* <input
        type="text"
        // min="1"
        // value={`${tenure}` + `${isYearMode ? ` Years` : `Months`}`}
        value={tenure}
        className="LoanAmountvalue"
        onChange={handleSliderChange}
      /> */}
      <div className="TenureSliderinp">
        <input
          type="range"
          // min="1"
          max={isYearMode ? "30" : "360"}
          value={isYearMode ? tenure : Math.floor(tenure / 12)}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
}

export default TenureSlider;
