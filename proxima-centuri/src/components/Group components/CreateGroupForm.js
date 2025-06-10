import React, {useState} from "react";

const CreateGroupForm = () => {
    const [groupName, setGroupName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Creating group: ${groupName}`);
    setGroupName("");
  };

    return (
       <form className="form" onSubmit={handleSubmit}>
      <h2>Create a New Group</h2>
      <input
        type="text"
        placeholder="Group Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        required
      />
      <button className="button" type="submit">Create Group</button>
    </form>
    );
};

export default CreateGroupForm;