import React from "react";
import FriendList from "./friendslist";
function friendsPage({ session }) {
  return <FriendList session={session} />;
}

export default friendsPage;
