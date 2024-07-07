import { useState } from "react";
import axios from "axios";

function AddUser() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/addCreators", { name })
      .then((response) => {
        setMessage(response.data.message);
        setName("");
      })
      .catch((error) => {
        setMessage("Error adding user");
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add User
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default AddUser;
