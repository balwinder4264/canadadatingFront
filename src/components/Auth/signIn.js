import React, { useRef, useState } from "react";

import { useMutation } from "@apollo/react-hooks";
import { SIGNIN_USER, SINGUP_USER } from "../../queries/index";

import { withRouter } from "react-router-dom";

const SignIn = props => {
  const [displayerror, setdispalyerror] = useState(false);
  const [signInUser, { loading, error }] = useMutation(SIGNIN_USER);
  const PasswordRef = useRef(null);
  const usernameRef = useRef(null);

  const submitHandler = event => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = PasswordRef.current.value;

    signInUser({ variables: { username, password } })
      .then(async data1 => {
        localStorage.setItem("token", data1.data.signinUser.token);
        await props.refetch();
        usernameRef.current.value = "";
        PasswordRef.current.value = "";
        props.history.push("/");
      })
      .catch(error => {
        console.log(error);
        setdispalyerror(true);
      });
  };

  return (
    <div className="col-lg-4">
      <div className="card bg-primary text-center card-form">
        <div className="card-body">
          <h3>Login</h3>

          <form onSubmit={submitHandler}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter Username"
                className="form -control form-control-lg"
                ref={usernameRef}
                onFocus={() => setdispalyerror(false)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form -control form-control-lg"
                placeholder="Password"
                ref={PasswordRef}
              />
            </div>

            {displayerror && (
              <span className="bg-light text-danger">
                Wrong passord or user name{" "}
              </span>
            )}

            <div
              className="d-flex bd-highlight "
              style={{ justifyContent: "space-around" }}
            >
              <button
                type="submit"
                style={{ width: " 66%" }}
                className="btn btn-outline-light btn-block"
                disabled={loading}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default withRouter(SignIn);
