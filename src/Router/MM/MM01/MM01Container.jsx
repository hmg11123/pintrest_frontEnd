import React, { useState } from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import MM01Presenter from "./MM01Presenter";
import {
 CREATE_USER,
 GET_ALL_USER_LENGTH,
 GET_ALL_USER,
 CHECK_USER_NICK_NAME,
} from "./MM01Queries";
import useInput from "../../../Hooks/useInput";
import { toast } from "react-toastify";
import storageRef from "../../../firebase";

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
 const [imagePath, setImagePath] = useState(``);
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
 const [checkUserNickNameMutation] = useMutation(CHECK_USER_NICK_NAME);

 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const nickNameCheckHandler = async () => {
  const { data } = await checkUserNickNameMutation({
   variables: {
    nickName: newNickName.value,
   },
  });
  if (data.checkUserNickName) {
   toast.info("사용가능한 닉네임 입니다.");
   setCheckNickName(true);
  } else {
   toast.error("사용불가한 닉네임 입니다.");
   setCheckNickName(false);
   newNickName.setValue("");
  }
 };

 const signUpHandler = async () => {
  if (!checkNickName) {
   toast.error("닉네임을 확인해주십시요");
   return;
  }
  if (newPassWord.value !== checkPassWord.value) {
   toast.error("비밀번호가 다릅니다");
   return;
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
    profileImage: imagePath,
    passWord: newPassWord.value,
    email: newEmail.value,
    mobile: newMobile.value,
    birth: newBirth.value,
    address: newAddress.value,
    detailAddress: newDetailAddress.value,
    zoneCode: newZoneCode.value,
    nickName: newNickName.value,
   },
  });
  if (data) {
   toast.info("회원가입에 성공하였습니다.");
   moveLinkHandler("signIn");
  } else {
   toast.error("회원가입에 실패하였습니다.");
  }
 };

 const fileChangeHandler = async (e) => {
  const originFile = e.target.files[0];
  const originFileName = e.target.files[0].name;

  console.log(originFile);
  console.log(originFileName);

  const D = new Date();

  const year = D.getFullYear() + "";
  const month = D.getMonth() + 1 + "";
  const date = D.getDate() + "";
  const hour = D.getHours() + "";
  const min = D.getMinutes() + "";
  const sec = D.getSeconds() + "";

  const suffix = year + month + date + hour + min + sec;

  const uploadFileName = originFileName + suffix;

  try {
   const storage = await storageRef.child(`User/profileImg/${uploadFileName}`);

   await storage.put(originFile);
   const url = await storage.getDownloadURL();

   await setImagePath(url);
   await toast.info("사진이 추가되었습니다");
  } catch (e) {}
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
   imagePath={imagePath}
   newMobile={newMobile}
   newAddress={newAddress}
   newDetailAddress={newDetailAddress}
   newZoneCode={newZoneCode}
   newPassWord={newPassWord}
   newBirth={newBirth}
   checkPassWord={checkPassWord}
   newNickName={newNickName}
   signUpHandler={signUpHandler}
   fileChangeHandler={fileChangeHandler}
   nickNameCheckHandler={nickNameCheckHandler}
   searchPostHandler={searchPostHandler}
  ></MM01Presenter>
 );
};

export default MM01Container;
