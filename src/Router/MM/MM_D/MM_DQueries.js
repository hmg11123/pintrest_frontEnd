import { gql } from "apollo-boost";

export const GET_ONE_BOARD = gql`
 query getOneBoard($id: String!) {
  getOneBoard(id: $id) {
   _id
   type
   title
   imgPath
   createdAt
   good
   hate
   hit
   author
   #    boardComment
  }
 }
`;

export const GET_DETAIL_USER = gql`
 query getDetailUser($id: String!) {
  getDetailUser(id: $id) {
   nickName
   profileImage
   follower
  }
 }
`;

export const UPDATE_FOLLOWER = gql`
 mutation updateFollower($id: String!, $userId: String!) {
  updateFollower(id: $id, userId: $userId)
 }
`;

export const DELETE_FOLLOWER = gql`
 mutation deleteFollower($id: String!, $userId: String!) {
  deleteFollower(id: $id, userId: $userId)
 }
`;

export const GET_COMMENT = gql`
 query getComment($writtenPlacer: String!) {
  getComment(writtenPlacer: $writtenPlacer) {
   _id
   writtenPlacer
   createdAt
   desc
   author
   good
   hate
  }
 }
`;

export const CREATE_COMMENT = gql`
 mutation createComment(
  $writtenPlacer: String!
  $desc: String!
  $author: String!
 ) {
  createComment(writtenPlacer: $writtenPlacer, desc: $desc, author: $author)
 }
`;
