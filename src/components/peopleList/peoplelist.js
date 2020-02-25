import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GetOppositeGenderUser,
  friendRequestaccept,
  GET_CURRENT_USER
} from "../../queries/index";
function PeopeleList() {
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
      console.log(data);
    });
  };
  const { loading, error, data } = useQuery(GetOppositeGenderUser);
  if (loading) return null;
  if (error) console.log(error);

  return data.getOppositeGenderUser.map(data => (
    <div
      className="card mt-5 mr-2"
      key={data._id}
      style={{
        width: "18rem",
        border: "#ADD8E6 3px solid"
      }}
    >
      <div className="card-header">{data.username}</div>
      <div className="card-body ">
        <h5 className="card-title">Location</h5>
        <p className="card-text  text-primary ">{data.Location}</p>
        <div className="card-footer bg-transparent border-primary">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => Addfriend(data.username, data._id)}
          >
            Add Friend
          </button>
        </div>
      </div>
    </div>
  ));
}

export default PeopeleList;
