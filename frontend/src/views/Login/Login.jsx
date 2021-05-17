import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../api/user.service";
import Form from "../../components/Form/Form";
import "./login.css";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onHandlelogin = (inputs) => {
    dispatch(async () => login(inputs)).then((user) => {
      history.push(`/todoList/${user._id}/${user.name}`);
    });
  };

  const onHandleSingUp = () => {
    history.push("/singUp");
  };

  return (
    <div className="login-container">
      <Form
        title="Sign in"
        buttonTitle="Sign in"
        fields={[
          { type: "email", placeholder: "E-mail", name: "email" },
          { type: "password", placeholder: "Password", name: "password" },
        ]}
        subimitFn={onHandlelogin}
        onCancelFn={onHandleSingUp}
        haveCancel={true}
        cancelTitle="SingUp"
      />
    </div>
  );
}

export default Login;
