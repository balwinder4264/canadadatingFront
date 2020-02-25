import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
function FriendsProfile({ session, history }) {
  const friendProfilepage = _id => {
    history.push(`/friends/${_id}`);
  };
  const unfriend = () => {
    if (window.confirm("Press a button!")) {
      alert("You said yes");
    }
  };
  return session.getCurrentUser.friends.map(data => (
    <div className="container" key={data._id}>
      <ul className="list-group">
        <li className="list-group-item">
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {data.username}
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => friendProfilepage(data._id)}
                style={{ marginRight: "10px" }}
              >
                View Profile
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => unfriend(data._id)}
              >
                Unfriend
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  ));
}

export default withRouter(FriendsProfile);
