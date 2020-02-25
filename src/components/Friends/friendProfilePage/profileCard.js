import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { getSingleUserData } from "../../../queries/index";
import ProfilePic from "../../assets/portrait.png";
function ProfileCard({ _id }) {
  const { loading, error, data } = useQuery(getSingleUserData, {
    variables: { _id }
  });
  if (loading) return null;
  if (error) console.log(error);
  console.log("FriendProfilePage : ", data.getSingleUserData);
  return (
    <div className="card">
      <img
        className="card-img-left"
        src={ProfilePic}
        alt="Card image cap"
        style={{ width: "20%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{data.getSingleUserData.username}</h5>
        <p className="card-text">{data.getSingleUserData.email}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
