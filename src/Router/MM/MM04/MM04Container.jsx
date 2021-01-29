import { useMutation } from "react-apollo-hooks";
import React, { useState } from "react";
import MM04Presenter from "./MM04Presenter";
import { CODE_CHECK, UPDATE_PASSWORD } from "./MM04Queries";
import useInput from "../../../Hooks/useInput";
import { toast } from "react-toastify";

const MM04Container = ({ history }) => {
 const inputCode = useInput("");
 const inputPassWord = useInput("");
 const CheckPassWord = useInput("");
 const [chageScreen, setChageScreen] = useState(false);

 const [codeCheckHandler] = useMutation(CODE_CHECK);
 const [updatePassWordMutation] = useMutation(UPDATE_PASSWORD);

 const checkCodeHandler = async () => {
  const { data } = await codeCheckHandler({
   variables: {
    email: JSON.parse(sessionStorage.getItem("login")).getUser.userData.email,
    code: inputCode.value,
   },
  });
  if (data.codeCheck) {
   toast.info("확인 되었습니다");
   setChageScreen(true);
  } else {
   toast.error("코드가 다릅니다");
  }
 };
 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const updatePassWordHandler = async () => {
  if (inputPassWord.value === "") {
   toast.error("변경할 비밀번호를 쓰세요");
   return;
  }
  if (CheckPassWord.value === "") {
   toast.error("비밀번호 확인을 쓰세요");
   return;
  }
  if (inputPassWord.value === CheckPassWord.value) {
   const { data } = await updatePassWordMutation({
    variables: {
     email: JSON.parse(sessionStorage.getItem("login")).getUser.userData.email,
     passWord: inputPassWord.value,
    },
   });

   if (data.updatePassWord) {
    toast.info("수정되었습니다");
    moveLinkHandler(`signIn`);
    sessionStorage.removeItem("login");
   } else {
    toast.info("수정을 실패했습니다");
    moveLinkHandler(
     `myPage/${
      JSON.parse(sessionStorage.getItem("login")).getUser.userData._id
     }`
    );
   }
  } else {
   toast.error("비밀번호와 비멃번호확인이 같지 않습니다");
   inputPassWord.setValue("");
   CheckPassWord.setValue("");
   return;
  }
 };

 return (
  <MM04Presenter
   inputCode={inputCode}
   chageScreen={chageScreen}
   inputPassWord={inputPassWord}
   CheckPassWord={CheckPassWord}
   checkCodeHandler={checkCodeHandler}
   updatePassWordHandler={updatePassWordHandler}
  ></MM04Presenter>
 );
};

export default MM04Container;
