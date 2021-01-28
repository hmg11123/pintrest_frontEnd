import React, { useState } from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import MM01Presenter from "./MM01Presenter";
import { CREATE_USER, GET_ALL_USER_LENGTH, GET_ALL_USER } from "./MM01Queries";
import useInput from "../../../Hooks/useInput";
import { toast } from "react-toastify";

const MM01Container = ({ history }) => {
 const newName = useInput("");
 const newNickName = useInput("");
 const newPassWord = useInput("");
 const newEmail = useInput("");
 const newMobile = useInput("");
 const newAddress = useInput("");
 const newDetailAddress = useInput("");
 const newZoneCode = useInput("");
 const newBirth = useInput("");
 const checkPassWord = useInput("");
 const [checkNickName, setCheckNickName] = useState(false);

 const {
  data: userDatum,
  loading: userLoading,
  refetch: userRefetch,
 } = useQuery(GET_ALL_USER);

 const {
  data: userlengthData,
  loading: userlengthLoading,
  refetch: userlengthRefetch,
 } = useQuery(GET_ALL_USER_LENGTH);

 const userlength = userlengthData ? userlengthData.getAllUserlength : "sfa";
 const [createUserMutation] = useMutation(CREATE_USER);

 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const nickNameCheckHandler = () => {
  for (let i = 0; i < userlength; i++) {
   if (newNickName !== userDatum.nickName) {
    setCheckNickName(true);
    toast.info("사용가능한 닉네임입니다");
   } else {
    setCheckNickName(false);
    toast.error("닉네임이 존재합니다");
    return;
   }
  }
 };

 const signUpHandler = async () => {
  if (!checkNickName) {
   toast.error("닉네임을 확인해주십시요");
   return;
  }
  if (newPassWord.value !== checkPassWord.value) {
   toast.error("비밀번호가 다릅니다");
  }
  if (newName.value === "") {
   toast.error("이름은 필수 값입니다");
   return;
  }
  if (newEmail.value === "") {
   toast.error("이메일은 필수 값입니다");
   return;
  }
  if (newMobile.value === "") {
   toast.error("전화번호는 필수 값입니다");
   return;
  }
  if (newBirth.value === "") {
   toast.error("생년월일은 필수 값입니다");
   return;
  }
  if (newAddress.value === "") {
   toast.error("주소는 필수 값입니다");
   return;
  }
  if (newDetailAddress.value === "") {
   newDetailAddress.setValue("-");
  }
  if (newZoneCode.value === "") {
   toast.error("우편번호는 필수 값입니다");
   return;
  }
  const { data } = await createUserMutation({
   variables: {
    name: newName.value,
    passWord: newPassWord.value,
    email: newEmail.value,
    mobile: newMobile.value,
    birth: newBirth.value,
    address: newAddress.value,
    detailAddress: newAddress.value,
    zoneCode: newZoneCode.value,
    nickName: newNickName.value,
   },
  });
  if (data) {
   toast.info("회원가입에 성공하였습니다.");
   moveLinkHandler("login");
  } else {
   toast.error("회원가입에 실패하였습니다.");
  }
 };

 const searchPostHandler = () => {
  new daum.Postcode({
   oncomplete: function (data) {
    newZoneCode.setValue(data.zonecode);
    newAddress.setValue(data.address);
   },
  }).open();
 };
 return (
  <MM01Presenter
   newName={newName}
   newEmail={newEmail}
   newMobile={newMobile}
   newAddress={newAddress}
   newDetailAddress={newDetailAddress}
   newZoneCode={newZoneCode}
   newPassWord={newPassWord}
   newBirth={newBirth}
   checkPassWord={checkPassWord}
   newNickName={newNickName}
   signUpHandler={signUpHandler}
   nickNameCheckHandler={nickNameCheckHandler}
   searchPostHandler={searchPostHandler}
  ></MM01Presenter>
 );
};

export default MM01Container;
