import React from "react";
import "../../App.css";

const TransactionHistory = ({transactions}) => {
    return (
       <div className="card">
      <h2>Transaction History</h2>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Member</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.length > 0 ? (
            transactions.map((txn, idx) => (
              <tr key={idx}>
                <td>{txn.date}</td>
                <td>{txn.member}</td>
                <td>{txn.type}</td>
                <td>KES {txn.amount}</td>
                <td>{txn.group}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No transactions yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div> 
    );
};
export default TransactionHistory;