import React, { useState, useEffect } from "react";
import { getAllLoans } from "./http-service";

const LandingPage = () => {
  const [loans, setLoans] = useState([]);
  useEffect(() => {
    getAllLoans().then((data) => {
      setLoans(data);
    });
  }, []);

  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <p>This is the landing page of the application.</p>
      <h2>Loans</h2>
      <ul>
        {loans.map((loan) => (
          <li key={loan.loanId}>
            <p>Loan ID: {loan.loanId}</p>
            <p>Loan Type: {loan.loanType}</p>
            <p>Loan Amount: ${loan.loanAmount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
