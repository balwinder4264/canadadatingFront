import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import MainNavBar from "./components/Navbar/navbar";

import App from "./components/App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import withSession from "./components/withSession";
import SignIn from "./components/Auth/signIn";
import PageRegisterUser from "./components/Auth/registartion/PageRegisterUser";
import PeopleListPage from "./components/peopleList/peopelListPage";
import FriendsPage from "./components/Friends/friendsPage";
import NotificationPage from "./components/Notifications/NotificationsPage";
import FriendProfilePage from "./components/Friends/friendProfilePage/friendProfilepage";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include"
  },
  request: opration => {
    const token = localStorage.getItem("token");
    console.log("token :", token);
    opration.setContext({
      headers: {
        authorization: token
      }
    });
  },
  onError: ({ networkWrror }) => {
    if (networkWrror) {
      console.log(" network error ", networkWrror);
    }
  }
});
const Root = ({ refetch, session }) => {
  console.log("Sessionn :", session);
  return (
    <Router>
      <div className="test">
        <MainNavBar session={session} />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/signin" render={() => <SignIn refetch={refetch} />} />
          <Route
            path="/registeration"
            render={() => <PageRegisterUser refetch={refetch} />}
          />
          <Route
            path="/peopleListPage"
            render={() => (
              <PeopleListPage refetch={refetch} session={session} />
            )}
          />
          <Route
            path="/friendsPage"
            render={() => <FriendsPage refetch={refetch} session={session} />}
          />
          <Route
            path="/friends/:_id"
            render={() => <FriendProfilePage session={session} />}
          />

          <Route
            path="/notifications"
            render={() => (
              <NotificationPage refetch={refetch} session={session} />
            )}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
const RootWithSession = withSession(Root);
ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSession />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
