import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./friend";
export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className="box">
      <h3>Friends: {friends.length}</h3>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}

/* 
1. State to hold data
2. use effect with dependancy array
3. Use fetch to load data
4. set loaded data to state 
5. display data on the component 
*/
