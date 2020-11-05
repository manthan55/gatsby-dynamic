

import React, { useEffect, useState } from "react";
import Header from "../components/header";

export default ({ pageContext: { userId } }) => {
  const [currentUserId, setCurrentUserId] = useState(userId);
  const [userInfo, setUserInfo] = useState();
  const [userTodos, setUserTodos] = useState([]);

  useEffect(() => {
    console.log(currentUserId);
    fetch(`https://jsonplaceholder.typicode.com/users/${currentUserId}`)
      .then((response) => response.json())
      .then((json) => {
        setUserInfo(json);
        console.log(json);
      })
      .catch((error) => console.log(error));
  }, []);

  const GetTodos = () => { 
    fetch(`https://jsonplaceholder.typicode.com/users/${currentUserId}/todos`)
      .then((response) => response.json())
      .then((json) => {
        setUserTodos(json);
        console.log(json);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
        <Header />
      <p>Hello user page {currentUserId}</p>
      {/* <p>Hello user page {userId}</p> */}
      {userInfo !== undefined && (
        <div>
          <p>USER DETIALS</p>
          <p>User ID: {userInfo.id}</p>
          <p>Name: {userInfo.name}</p>
          <p>Username: {userInfo.username}</p>
          <p>Email: {userInfo.email}</p>
          <p>Phone: {userInfo.phone}</p>
        </div>
      )}

      <button
        onClick={() => {
          GetTodos();
        }}
      >
        Get Todos
      </button>

      {userTodos !== undefined
        ? userTodos.map((todo) => (
            <div key={todo.id}>
              <p>Todo ID: {todo.id}</p>
              <p>Todo title: {todo.title}</p>
            </div>
  ))
        : null}
    </div>
  );
};
