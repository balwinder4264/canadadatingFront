import React, { useRef, useState } from "react";

import { useMutation } from "@apollo/react-hooks";
import { SIGNIN_USER, SINGUP_USER } from "../../../queries/index";

import { withRouter } from "react-router-dom";

const SignIn = props => {
  const [displayerror, setdispalyerror] = useState(false);

  const [addUser, { adduserloading, addusererror }] = useMutation(SINGUP_USER);
  const PasswordRef = useRef(null);
  const usernameRef = useRef(null);
  const EmailRef = useRef(null);
  const loctaionref = useRef(null);
  const genderref = useRef(null);
  const consfirmPasswordRef = useRef(null);
  const submitHandler = event => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = PasswordRef.current.value;
    const email = EmailRef.current.value;
    const Location = loctaionref.current.value;
    const Gender = genderref.current.value;
    console.log("Location :", Location, "gender :", Gender);
    if (password !== consfirmPasswordRef.current.value) {
      alert("password does not match");
      return;
    }
    addUser({ variables: { username, email, password, Location, Gender } })
      .then(async data1 => {
        if (data1.data.signupUser.userExsist) {
          alert("User already exsit ");
          return;
        }

        localStorage.setItem("token", data1.data.signupUser.token);
        await props.refetch();
        usernameRef.current.value = "";
        EmailRef.current.value = "";
        PasswordRef.current.value = "";

        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className="card bg-primary text-center card-form">
        <div className="card-body">
          <p>Please fill out this form to register</p>
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
                type="email"
                className="form -control form-control-lg"
                placeholder="Email"
                ref={EmailRef}
              />
            </div>
            <div className="form-group">
              <select
                className="custom-select my-1 mr-sm-2 optionsize"
                ref={genderref}
                required
              >
                <option value="null">Choose Your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <select
                className="custom-select my-1 mr-sm-2 optionsize"
                ref={loctaionref}
                required
              >
                <option value="null">Choose Your Location</option>
                <option value="ON">ON</option>
                <option value="SK">SK</option>
                <option value="BC">BC</option>
                <option value="QC">QC</option>
                <option value="AB">AB</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form -control form-control-lg"
                placeholder="Password"
                ref={PasswordRef}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form -control form-control-lg"
                placeholder="Confirm Password"
                ref={consfirmPasswordRef}
              />
            </div>

            {displayerror && (
              <span className="bg-light text-danger">User already Exsist </span>
            )}
            <div
              className="d-flex bd-highlight"
              style={{ justifyContent: "space-around" }}
            >
              <button
                type="submit"
                className="btn btn-outline-light"
                style={{ width: " 66%" }}
                disabled={adduserloading}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default withRouter(SignIn);
