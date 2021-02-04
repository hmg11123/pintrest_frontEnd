import React, { useEffect, useState } from "react";
import MM03Presenter from "./MM03Presenter";
import {
 UPDATE_USER,
 DELETE_USER,
 CHECKCODE_USER,
 UPDATE_PROFILEIMG,
} from "./MM03Queries";
import { useMutation } from "react-apollo-hooks";
import useInput from "../../../Hooks/useInput";
import storageRef from "../../../firebase";
import { toast } from "react-toastify";

const MM03Container = ({ history, match }) => {
 const updateNickName = useInput("");
 const updateName = useInput("");
 const updateEmail = useInput("");
 const updateMobile = useInput("");
 const updateAddress = useInput("");
 const updateDetailAddress = useInput("");
 const updateZoneCode = useInput("");
 const updateBirth = useInput("");
 const [isDialogOpen, setIsDialogOpen] = useState(false);
 const [imagePath, setImagePath] = useState(
  `${JSON.parse(sessionStorage.getItem("login")).getUser.userData.profileImage}`
 );
 const [chageBtn, setChageBtn] = useState(false);

 const [updateUserMutation] = useMutation(UPDATE_USER);
 const [deleteUserMutation] = useMutation(DELETE_USER);
 const [sendCheckCodeMutation] = useMutation(CHECKCODE_USER);
 const [updateProfileImgMutation] = useMutation(UPDATE_PROFILEIMG);

 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const fileChangeHandler = async (e) => {
  const originFile = e.target.files[0];
  const originFileName = e.target.files[0].name;

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

   await setChageBtn(true);
   await setImagePath(url);
   await toast.info("사진이 추가되었습니다");
  } catch (e) {}
 };

 const uploadProfileImg = async () => {
  console.log("sFDasfdas", imagePath);
  const { data } = await updateProfileImgMutation({
   variables: {
    id: match.params.id,
    profileImage: imagePath,
   },
  });
  if (data.updateProfileImg) {
   toast.info("사진이 변경되었습니다");
   sessionStorage.removeItem("login");
   moveLinkHandler("signIn");
   await setChageBtn(false);
  } else {
   toast.error("변경에 실패하였습니다");
  }
 };

 const updateUserHandler = async () => {
  const { data } = await updateUserMutation({
   variables: {
    id: match.params.id,
    nickName: updateNickName.value,
    name: updateName.value,
    email: updateEmail.value,
    mobile: updateMobile.value,
    address: updateAddress.value,
    detailAddress: updateDetailAddress.value,
    zoneCode: updateZoneCode.value,
    birth: updateBirth.value,
   },
  });
  if (data) {
   toast.info("정보수정을 성공하셨습니다");
   setIsDialogOpen(!isDialogOpen);
   sessionStorage.removeItem("login");
   moveLinkHandler(`signIn`);
  } else {
   toast.error("정보수정을 실패하셨습니다");
  }
 };
 const passWordHandler = async () => {
  const { data } = await sendCheckCodeMutation({
   variables: {
    email: JSON.parse(sessionStorage.getItem("login")).getUser.userData.email,
   },
  });
  console.log(data);
  moveLinkHandler("chagePass");
 };

 const deleteUserHandler = async () => {
  const { data } = await deleteUserMutation({
   variables: {
    id: match.params.id,
   },
  });
  if (data) {
   window.sessionStorage.removeItem("login");
   toast.info("계정을 삭제하셨습니다.");
   moveLinkHandler("signIn");
  } else {
   toast.error("계정삭제를 실패하셨습니다");
  }
 };

 const _isDialogOpenToggle = () => {
  setIsDialogOpen(!isDialogOpen);
 };

 useEffect(() => {
  updateNickName.setValue(
   JSON.parse(sessionStorage.getItem("login")).getUser.userData.nickName
  );
  updateName.setValue(
   JSON.parse(sessionStorage.getItem("login")).getUser.userData.name
  );
  updateEmail.setValue(
   JSON.parse(sessionStorage.getItem("login")).getUser.userData.email
  );
  updateMobile.setValue(
   JSON.parse(sessionStorage.getItem("login")).getUser.userData.mobile
  );
  updateAddress.setValue(
   JSON.parse(sessionStorage.getItem("login")).getUser.userData.address
  );
  updateDetailAddress.setValue(
   JSON.parse(sessionStorage.getItem("login")).getUser.userData.detailAddress
  );
  updateZoneCode.setValue(
   JSON.parse(sessionStorage.getItem("login")).getUser.userData.zoneCode
  );
  updateBirth.setValue(
   JSON.parse(sessionStorage.getItem("login")).getUser.userData.birth
  );
 }, []);
 console.log(imagePath);
 return (
  <MM03Presenter
   updateNickName={updateNickName}
   updateName={updateName}
   updateEmail={updateEmail}
   updateMobile={updateMobile}
   updateAddress={updateAddress}
   updateDetailAddress={updateDetailAddress}
   imagePath={imagePath}
   fileChangeHandler={fileChangeHandler}
   updateZoneCode={updateZoneCode}
   updateBirth={updateBirth}
   updateUserHandler={updateUserHandler}
   uploadProfileImg={uploadProfileImg}
   passWordHandler={passWordHandler}
   deleteUserHandler={deleteUserHandler}
   moveLinkHandler={moveLinkHandler}
   _isDialogOpenToggle={_isDialogOpenToggle}
   isDialogOpen={isDialogOpen}
   chageBtn={chageBtn}
  ></MM03Presenter>
 );
};

export default MM03Container;
