import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import EventsExsample from "./components/EventsExsample";
import List from "./components/List";
import TodoItems from "./components/TodoItems";
import UserItem from "./components/UserItem";
import UserList from "./components/UserList";
import { ITodo, IUser } from "./types/types";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_&limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <EventsExsample />
      <Card variant={CardVariant.primary} height="200px" width="200px">
        <button>Open</button>
        <p>text</p>
      </Card>
      <List
        items={users}
        renderItems={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItems={(todo: ITodo) => <TodoItems todo={todo} key={todo.id} />}
      />
    </div>
  );
};

export default App;
