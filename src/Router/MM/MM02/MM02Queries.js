import { gql } from "apollo-boost";

export const GET_USER = gql`
 mutation getUser($email: String!, $passWord: String!) {
  getUser(email: $email, passWord: $passWord) {
   isLogin
   userData {
    _id
    name
    email
    birth
    mobile
    address
    profileImage
    detailAddress
    zoneCode
    nickName
   }
  }
 }
`;
