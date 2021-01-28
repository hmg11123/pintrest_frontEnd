import { gql } from "apollo-boost";

export const GET_ALL_USER = gql`
 query getAllUser {
  getAllUser {
   _id
   name
   email
   mobile
   address
   detailAddress
   zoneCode
   nickName
  }
 }
`;

export const GET_ALL_USER_LENGTH = gql`
 query getAllUserlength {
  getAllUserlength
 }
`;

export const CREATE_USER = gql`
 mutation createUser(
  $name: String!
  $passWord: String!
  $email: String!
  $mobile: String!
  $address: String!
  $detailAddress: String!
  $zoneCode: String!
  $nickName: String!
 ) {
  createUser(
   name: $name
   passWord: $passWord
   email: $email
   mobile: $mobile
   address: $address
   detailAddress: $detailAddress
   zoneCode: $zoneCode
   nickName: $nickName
  )
 }
`;
