import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function DemoUser() {
  const dispatch = useDispatch();
  const [credential] = useState("demo-user");
  const [password] = useState("password1234");

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential, password }));
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
