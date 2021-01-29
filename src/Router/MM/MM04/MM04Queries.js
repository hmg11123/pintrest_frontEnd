import { gql } from "apollo-boost";

export const CODE_CHECK = gql`
 mutation codeCheck($email: String!, $code: String!) {
  codeCheck(email: $email, code: $code)
 }
`;

export const UPDATE_PASSWORD = gql`
 mutation updatePassWord($email: String!, $passWord: String!) {
  updatePassWord(email: $email, passWord: $passWord)
 }
`;
