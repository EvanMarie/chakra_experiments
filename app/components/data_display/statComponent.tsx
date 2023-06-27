import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const RealTimeStat = () => {
  const [users, setUsers] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data.length);
    };

    // Fetch users every second
    const intervalId = setInterval(fetchUsers, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Stat textAlign="center">
      <StatLabel>Total Users</StatLabel>
      <StatNumber>{users}</StatNumber>
      <StatHelpText>Updated every second</StatHelpText>
    </Stat>
  );
};

export default RealTimeStat;
