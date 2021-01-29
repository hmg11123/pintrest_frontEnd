import React, { useEffect, useState } from "react";
import MM03Presenter from "./MM03Presenter";
import { UPDATE_USER, DELETE_USER } from "./MM03Queries";
import { useMutation } from "react-apollo-hooks";
import useInput from "../../../Hooks/useInput";
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

 const [updateUserMutation] = useMutation(UPDATE_USER);
 const [deleteUserMutation] = useMutation(DELETE_USER);

 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
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

 const deleteUserHandler = async () => {
  const { data } = await deleteUserMutation({
   variables: {
    id: match.params.id,
   },
  });
  if (data) {
   toast.info("계정을 삭제하셨습니다.");
   moveLinkHandler("signIn");
   sessionStorage.removeItem("login");
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

 return (
  <MM03Presenter
   updateNickName={updateNickName}
   updateName={updateName}
   updateEmail={updateEmail}
   updateMobile={updateMobile}
   updateAddress={updateAddress}
   updateDetailAddress={updateDetailAddress}
   updateZoneCode={updateZoneCode}
   updateBirth={updateBirth}
   updateUserHandler={updateUserHandler}
   deleteUserHandler={deleteUserHandler}
   _isDialogOpenToggle={_isDialogOpenToggle}
   isDialogOpen={isDialogOpen}
  ></MM03Presenter>
 );
};

export default MM03Container;
