import React from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  GetOppositeGenderUser,
  friendRequestaccept,
  GET_CURRENT_USER
} from "../../queries/index";
function FriendRequestNotificationList({ session }) {
  const [addfriend, { loadingfriend, frinederror }] = useMutation(
    friendRequestaccept
  );
  const Addfriend = (username, _id) => {
    console.log("_id :", _id);
    addfriend({
      variables: { username, _id },
      refetchQueries: [
        { query: GetOppositeGenderUser },
        { query: GET_CURRENT_USER }
      ]
    }).then(data => {
      alert("Request Accepted Chcek your friend List");
    });
  };

  return session.getCurrentUser.recieverequest.map(data => (
    <div className="container" key={data._id}>
      <ul className="list-group">
        <li className="list-group-item">
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {data.username}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => Addfriend(data.username, data._id)}
            >
              Accept
            </button>
          </div>
        </li>
      </ul>
    </div>
  ));
}

export default FriendRequestNotificationList;
