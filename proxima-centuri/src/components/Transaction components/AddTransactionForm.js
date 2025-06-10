import React, {useState} from "react";
import "../../App.css";

const AddTransactionForm = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    date: "",
    member: "",
    type: "Deposit",
    amount: "",
    group: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(formData);
    setFormData({
      date: "",
      member: "",
      type: "Deposit",
      amount: "",
      group: ""
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="member"
        placeholder="Member Name"
        value={formData.member}
        onChange={handleChange}
        required
      />
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="Deposit">Deposit</option>
        <option value="Withdrawal">Withdrawal</option>
      </select>
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="group"
        placeholder="Group Name"
        value={formData.group}
        onChange={handleChange}
      />
      <button className="button" type="submit">Add</button>
    </form>
  );
};

export default AddTransactionForm;