import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_CURRENT_USER } from "../queries/index";
const withSession = Component => props => {
  const { loading, error, data, refetch } = useQuery(GET_CURRENT_USER);
  if (loading) return null;
  if (error) console.log(error);

  return <Component {...props} refetch={refetch} session={data} />;
};
export default withSession;
