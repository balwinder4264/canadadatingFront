import { gql } from "apollo-boost";
//reciepies queriie

export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      username
      joinDate
      email
      Location
      Gender
      friends {
        _id
        username
      }
      sentrequest {
        _id
        username
      }
      recieverequest {
        _id
        username
      }
    }
  }
`;
//mutation  user
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;
export const SINGUP_USER = gql`
  mutation(
    $username: String!
    $email: String!
    $password: String!
    $Gender: String!
    $Location: String!
  ) {
    signupUser(
      username: $username
      email: $email
      password: $password
      Gender: $Gender
      Location: $Location
    ) {
      token
      userExsist
    }
  }
`;
//get Opposite gender user

export const GetOppositeGenderUser = gql`
  query {
    getOppositeGenderUser {
      _id
      username
      joinDate
      email
      Location
      Gender
    }
  }
`;
//add friend mutation
export const friendRequestaccept = gql`
  mutation($username: String!, $_id: ID) {
    friendRequestaccept(username: $username, _id: $_id) {
      sender
      request
      reciever
      accept
    }
  }
`;
//Friends
export const Friends = gql`
  query {
    Friends {
      sender
      request
      reciever
      accept
    }
  }
`;
//get single user data
export const getSingleUserData = gql`
  query($_id: ID!) {
    getSingleUserData(_id: $_id) {
      _id
      username
      joinDate
      email
      Location
      Gender
    }
  }
`;
export const Unfriend = gql`
  mutation($_id: ID) {
    unfriend(_id: $_id) {
      sender
    }
  }
`;
