import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { creatUser } from "../../api/user.service";
import Form from "../../components/Form/Form";

function SingUp() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onHandleSubimit = (inputs) => {
    dispatch(async () => creatUser(inputs)).then((data) => {
      history.push(`/todoList/${data._id}/${data.name}`);
    });
  };

  return (
    <div className="login-container">
      <Form
        title="Create your account"
        buttonTitle="Register"
        fields={[
          { type: "text", placeholder: "Name", name: "name" },
          { type: "email", placeholder: "E-mail", name: "email" },
          { type: "password", placeholder: "Password", name: "password" },
        ]}
        subimitFn={onHandleSubimit}
      />
    </div>
  );
}

export default SingUp;
