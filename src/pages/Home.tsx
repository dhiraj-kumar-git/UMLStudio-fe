import React, { useEffect, useState } from "react";
import { getUsers } from "../controller/userController";

interface User {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="home-page">
      <h2>Home Canvas</h2>
      <p>This is your workspace area. Add charts, reports, or widgets here.</p>
      <div className="user-list">
        {users.map((u) => (
          <div key={u.id} className="user-card">
            {u.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
