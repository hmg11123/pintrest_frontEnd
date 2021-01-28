import { gql } from "apollo-boost";

export const LOGIN_USER = gql`
 mutation loginUser($email: String!, $passWord: String!) {
  loginUser(email: $email, passWord: $passWord)
 }
`;
