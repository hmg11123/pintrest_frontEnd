import { useMutation } from "react-apollo-hooks";
import React, { useState } from "react";
import MM05Presenter from "./MM05Presenter";
import { CREATE_BOARD } from "./MM05Queries";
import useInput from "../../../Hooks/useInput";
import storageRef from "../../../firebase";
import FacebookShare from "facebook-share-link";
import { toast } from "react-toastify";

const MM05Container = ({ match, history }) => {
 const inputTitle = useInput(``);
 const chooseType = useInput(``);
 const [imagePath, setImagePath] = useState(``);
 const [chageBtn, setChageBtn] = useState(false);
 const [createBoardMutation] = useMutation(CREATE_BOARD);

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

   await setChageBtn(true);
   await setImagePath(url);
   await toast.info("사진이 추가되었습니다");
  } catch (e) {}
 };

 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const createHandler = async () => {
  const { data } = await createBoardMutation({
   variables: {
    type: chooseType.value,
    title: inputTitle.value,
    imgPath: imagePath,
    author: match.params.id,
   },
  });
  if (data.createBoard) {
   toast.info("사진을 올리는데 성공하였습니다");
   moveLinkHandler("");
  } else {
   toast.info("실패함");
  }
 };

 //  const faceBookShare = async () => {
 //   let share = FacebookShare(1234); //=> app id
 //   share({
 //    href: "http://www.my-website.com",
 //    display: "popup",
 //   });
 //  };

 const selectBoxHandler = async (value) => {
  chooseType.setValue(`${value}`);
 };

 return (
  <MM05Presenter
   selectBoxHandler={selectBoxHandler}
   fileChangeHandler={fileChangeHandler}
   chooseType={chooseType}
   imagePath={imagePath}
   chageBtn={chageBtn}
   inputTitle={inputTitle}
   createHandler={createHandler}
  ></MM05Presenter>
 );
};

export default MM05Container;
