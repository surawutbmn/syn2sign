import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";


function Creator() {
  const [users, setUsers] = useState([]);
  const [randomUsers, setRandomUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/creators")
      .then((response) => {
        setUsers(response.data);
        if (response.data.length > 0) {
          setRandomUsers(getRandomUsers(response.data, 5)); // Set initial user
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (users.length > 0) {
        setRandomUsers(getRandomUsers(users, 5));
      }
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [users]);

  const getRandomUsers = (users, count) => {
    let randomUsers = [];
    const usersCopy = [...users];
    for (let i = 0; i < count && usersCopy.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * usersCopy.length);
      randomUsers.push(usersCopy.splice(randomIndex, 1)[0]);
    }
    return randomUsers;
  };

  return (
    <div>
      <h1>CREATOR</h1>
      <img src="" alt="" />
      <Table className="mb-3" striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>profile</th>
            <th>TH</th>
            <th>EN</th>
            <th>Nickname</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {randomUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img
                  src={`/profile_img/${user.profile_img}`}
                  alt=""
                  style={{ width: "10em" }}
                />
              </td>
              <td>{user.name_th}</td>
              <td>{user.name_en}</td>
              <td>N ํ {user.nickname_en}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Creator;
