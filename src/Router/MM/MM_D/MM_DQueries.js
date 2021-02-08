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
   author {
    _id
    nickName
    profileImage
   }
  }
 }
`;

export const GET_DETAIL_USER = gql`
 query getDetailUser($id: String!) {
  getDetailUser(id: $id) {
   _id
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
   author {
    _id
    profileImage
    nickName
   }
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

export const GET_All_BOARD = gql`
 query getAllBoard {
  getAllBoard {
   _id
   type
   title
   imgPath
   author {
    _id
    nickName
    profileImage
   }
  }
 }
`;

export const UPDATE_COMMENT = gql`
 mutation updateComment($id: String!, $desc: String!) {
  updateComment(id: $id, desc: $desc)
 }
`;

export const DELETE_COMMENT = gql`
 mutation deleteComment($id: String!) {
  deleteComment(id: $id)
 }
`;
