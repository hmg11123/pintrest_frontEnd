import React from "react";
import MM02Presenter from "./MM02Presenter";
import { GET_USER } from "./MM02Queries";
import useInput from "../../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";

const MM02Container = ({ history }) => {
 const inputEmail = useInput("");
 const inputPassWord = useInput("");

 const [getUserMutation] = useMutation(GET_USER);

 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const loginHandler = async () => {
  if (inputEmail.value === "") {
   toast.error("이메일을 입력해주세요");
   return;
  }
  if (inputPassWord.value === "") {
   toast.error("비밀번호를 입력해주세요");
   return;
  }
  const { data } = await getUserMutation({
   variables: {
    email: inputEmail.value,
    passWord: inputPassWord.value,
   },
  });

  if (data.getUser) {
   const login = data.getUser.userData;
   if (login) {
    toast.info("로그인성공");
    window.sessionStorage.setItem("login", JSON.stringify(data));
    moveLinkHandler("");
   } else {
    toast.error("아이디 또는 비밀번호가 틀리셧습니다");
   }
  } else {
   toast.error("로그인실패");
  }
 };
 return (
  <MM02Presenter
   inputEmail={inputEmail}
   inputPassWord={inputPassWord}
   loginHandler={loginHandler}
  ></MM02Presenter>
 );
};

export default MM02Container;
