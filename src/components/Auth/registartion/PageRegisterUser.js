import React from "react";
import UserRegistrationform from "./userRegisterationform";

import { withRouter } from "react-router-dom";
import "./pageregistrationuser.css";
const PageRegisterUser = props => {
  return (
    <div className="container" className="backgorund">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <UserRegistrationform refetch={props.refetch} />
        </div>
      </div>
    </div>
  );
};
export default withRouter(PageRegisterUser);
