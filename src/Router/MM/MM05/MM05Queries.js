import { gql } from "apollo-boost";

export const CREATE_BOARD = gql`
 mutation createBoard(
  $type: String!
  $title: String!
  $imgPath: String!
  $author: String!
 ) {
  createBoard(type: $type, title: $title, imgPath: $imgPath, author: $author)
 }
`;
