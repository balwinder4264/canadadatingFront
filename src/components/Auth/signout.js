import React from "react";
import { ApolloConsumer } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";

const SignOut = ({ session, history }) => {
  const singoutHandler = async client => {
    localStorage.setItem("token", "null");

    client.resetStore();
    //client.resetStore();

    history.push("/");
  };
  return (
    <ApolloConsumer>
      {client => {
        return (
          <button
            onClick={() => singoutHandler(client)}
            className="btn btn-outline-success my-2 my-sm-0"
          >
            SignOut
          </button>
        );
      }}
    </ApolloConsumer>
  );
};
export default withRouter(SignOut);
