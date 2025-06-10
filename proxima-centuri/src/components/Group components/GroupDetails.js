import React from "react";

const GroupDetails = () => {
    return (
      <div className="card">
      <h2>{group.name}</h2>
      <p>{group.description}</p>

      <h4>Members</h4>
      <ul>
        {group.members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>

      <p><strong>Total Saved:</strong> ${group.totalSaved}</p>

      <button className="button">Contribute</button>
      <button className="button" style={{ marginLeft: '10px' }}>View Transactions</button>
    </div>  
    );
};
export default GroupDetails;