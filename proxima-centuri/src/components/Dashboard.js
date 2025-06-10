import React, {useState} from "react";
import TransactionList from "./Transaction components/TransactionList";
import TransactionForm from "./Transaction components/TransactionForm";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  const calculateTotalSavings = () => {
    return transactions.reduce((sum, txn) => sum + txn.amount, 0);
  };

    return (
      <div className="container">
      <div className="grid">
        <div className="card">
          <h2>Total Savings</h2>
          <p>KES {calculateTotalSavings().toFixed(2)}</p>
        </div>
        <div className="card">
          <h2>Pending Loans</h2>
          <p>None</p> {/* You can wire this up later */}
        </div>
      </div>

      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={transactions} />
    </div>
    );
};

export default Dashboard;