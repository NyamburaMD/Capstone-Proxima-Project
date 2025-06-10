import React from "react";
import '../../App.css'; // Adjust the path if your CSS is elsewhere

const TransactionList = ({ transactions = [] }) => {
  return (
    <div className="card">
      <h2>Transaction History</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul className="transaction-list">
          {transactions.map((txn, index) => (
            <li key={index} className="transaction-item">
              <div className="transaction-header">
                <strong>{txn.payer}</strong> paid <strong>{txn.amount}</strong>
              </div>
              <div className="transaction-meta">
                <span>{txn.description}</span> • <span>{txn.date}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;