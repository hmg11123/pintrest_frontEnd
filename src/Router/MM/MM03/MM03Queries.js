import { gql } from "apollo-boost";

export const UPDATE_USER = gql`
 mutation updateUser(
  $id: String!
  $name: String!
  $email: String!
  $mobile: String!
  $address: String!
  $detailAddress: String!
  $zoneCode: String!
  $birth: String!
  $nickName: String!
 ) {
  updateUser(
   id: $id
   name: $name
   email: $email
   mobile: $mobile
   address: $address
   detailAddress: $detailAddress
   zoneCode: $zoneCode
   birth: $birth
   nickName: $nickName
  )
 }
`;

export const DELETE_USER = gql`
 mutation deleteUser($id: String!) {
  deleteUser(id: $id)
 }
`;
