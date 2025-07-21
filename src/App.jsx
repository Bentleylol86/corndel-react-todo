import { useState, useEffect } from 'react';
import User from './components/User.jsx';

function App() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
}

export default App;
