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

export const UPDATE_PROFILEIMG = gql`
 mutation updateProfileImg($id: String!, $profileImage: String!) {
  updateProfileImg(id: $id, profileImage: $profileImage)
 }
`;

export const DELETE_USER = gql`
 mutation deleteUser($id: String!) {
  deleteUser(id: $id)
 }
`;

export const CHECKCODE_USER = gql`
 mutation checkCodeUser($email: String!) {
  checkCodeUser(email: $email)
 }
`;
