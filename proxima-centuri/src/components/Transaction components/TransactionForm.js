import React, {useState} from "react";
import "../../App.css";

const TransactionForm = ({ onAddTransaction }) => {
  const [payer, setPayer] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: crypto.randomUUID(), // you can switch this out with DB-generated ID
      payer,
      amount: parseFloat(amount),
      description,
      date: new Date().toISOString(),
    };
    onAddTransaction(newTransaction);
    setPayer('');
    setAmount('');
    setDescription('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New Transaction</h2>

      <input
        type="text"
        placeholder="Payer's name"
        value={payer}
        onChange={(e) => setPayer(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount (KES)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit" className="button">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;