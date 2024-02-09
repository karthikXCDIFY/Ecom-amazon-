import React from "react";
import Login from "./Login";
import "../Error.scss";

function Error() {
  return (
    <div>
      <h1 className="error-message">
        There was a problem We cannot find an account with that email address
      </h1>
      <Login />
    </div>
  );
}

export default Error;
