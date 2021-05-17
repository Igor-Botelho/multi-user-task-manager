import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import store from "./store";
import Login from "./views/Login/Login";
import SingUp from "./views/SingUp/SingUp";
import TodoList from "./views/Todolist/TodoList";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={Login}></Route>
        <Route path="/singUp" exact component={SingUp}></Route>
        <Route path="/todoList/:userId/:userName" component={TodoList}></Route>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
