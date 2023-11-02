import React from "react";
import { useState } from "react";

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvesment: 10000,
    annualInvesment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Invesment</label>
          <input 
            type="number" 
            required
            value={userInput.initialInvesment} 
            onChange={(event) => handleChange('initialInvesment', event.target.value)}
          />
        </p>
        <p>
          <label>Annual Invesment</label>
          <input 
            type="number" 
            required
            value={userInput.annualInvesment} 
            onChange={(event) => handleChange('annualInvesment', event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input 
            type="number" 
            required
            value={userInput.expectedReturn} 
            onChange={(event) => handleChange('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input 
            type="number" 
            required
            value={userInput.duration} 
            onChange={(event) => handleChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
