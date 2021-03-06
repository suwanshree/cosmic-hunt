import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function DemoUser() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential] = useState("demo-user");
  const [password] = useState("password1234");

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential, password })).then(() => history.push("/products"));
  };
  return (
    <>
      <button className="demoButton" onClick={handleSubmit}>
        Demo
      </button>
    </>
  );
}

export default DemoUser;
