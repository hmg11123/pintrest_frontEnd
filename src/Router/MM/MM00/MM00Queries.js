import { gql } from "apollo-boost";

export const GET_All_BOARD = gql`
 query getAllBoard {
  getAllBoard {
   _id
   type
   title
   imgPath
   author
  }
 }
`;
