import React from "react";
import ProfileCard from "./profileCard";
import { withRouter } from "react-router-dom";
function FriendProfilePage({ match }) {
  const { _id } = match.params;

  return (
    <div className="container">
      <ProfileCard _id={_id} />
    </div>
  );
}

export default withRouter(FriendProfilePage);
