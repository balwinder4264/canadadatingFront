import React from "react";
import PeopeleList from "./peoplelist";
import { withRouter } from "react-router-dom";
function PeopeleListPage({ session, history }) {
  if (!session.getCurrentUser) {
    alert("We dodnot have token ");
    history.push("/");
  }
  return (
    <div id="reciepe-section1">
      <div className="dark-overlay">
        <div className=" d-flex container justify-content-center flex-wrap ">
          <PeopeleList />
        </div>
      </div>
    </div>
  );
}

export default withRouter(PeopeleListPage);
