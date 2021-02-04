import React, { useEffect, useState } from "react";
import MM_DPresenter from "./MM_DPresenter";
import useInput from "../../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import {
 GET_ONE_BOARD,
 GET_DETAIL_USER,
 UPDATE_FOLLOWER,
 DELETE_FOLLOWER,
 CREATE_COMMENT,
 GET_COMMENT,
} from "./MM_DQueries";

const MM_DContainer = ({ match }) => {
 const [imagePath, setImagePath] = useState(``);
 const inputComment = useInput(``);
 const inputDesc = useInput(``);
 const [commentBoolean, setCommentBoolean] = useState(false);

 const [updateFollowerMutation] = useMutation(UPDATE_FOLLOWER);
 const [deleteFollowerMutation] = useMutation(DELETE_FOLLOWER);
 const [createCommentMutation] = useMutation(CREATE_COMMENT);
 const sessionUser = JSON.parse(sessionStorage.getItem("login"));

 const {
  data: getOneBoardDatum,
  loading: getOneBoardLoading,
  refetch: getOneBoardRefetch,
 } = useQuery(GET_ONE_BOARD, {
  variables: {
   id: match.params.id,
  },
 });

 const {
  data: getCommentDatum,
  loading: getCommentLoading,
  refetch: getCommentRefetch,
 } = useQuery(GET_COMMENT, {
  variables: {
   writtenPlacer: match.params.id,
  },
 });

 console.log(getCommentDatum);

 const {
  data: getDetailUserDatum,
  loading: getDetailUserLoading,
  refetch: getDetailUserRefetch,
 } = useQuery(GET_DETAIL_USER, {
  variables: {
   id: getOneBoardDatum && getOneBoardDatum.getOneBoard.author,
  },
  skip: !(getOneBoardDatum && getOneBoardDatum.getOneBoard.author),
 });

 const followerUpdateHandler = async () => {
  if (!sessionUser) {
   toast.error("로그인후 이용하실수 있습니다.");
   return;
  }
  //   [1,2,3,4,5,6].indexOf(5)

  if (
   getDetailUserDatum.getDetailUser.follower.indexOf(
    sessionUser.getUser.userData._id
   ) !== -1
  ) {
   toast.error("문제발생");
   return;
  }
  const { data } = await updateFollowerMutation({
   variables: {
    id: getOneBoardDatum && getOneBoardDatum.getOneBoard.author,
    userId: sessionUser.getUser.userData._id,
   },
  });
  if (data.updateFollower) {
   toast.info("팔로우 되었습니다");
   getDetailUserRefetch();
  } else {
   toast.error("실패");
  }
 };

 const followerDeleteHandler = async () => {
  //   if (
  //    getDetailUserDatum.getDetailUser.follower.indexOf(
  //     sessionUser.getUser.userData._id
  //    ) !== -1
  //   ) {
  //   }

  const { data } = await deleteFollowerMutation({
   variables: {
    id: getOneBoardDatum && getOneBoardDatum.getOneBoard.author,
    userId: sessionUser.getUser.userData._id,
   },
  });

  if (data.deleteFollower) {
   toast.info("팔로우를 취소 하셨습니다");
   getDetailUserRefetch();
  } else {
   toast.error("실패");
  }
 };

 const commentCreateHandler = async () => {
  if (!sessionStorage.getItem("login")) {
   toast.error("로그인후 이용해주세요");
   return;
  }
  if (inputComment.value === "") {
   toast.error("댓글을 작성해주세요");
   return;
  }
  const { data } = await createCommentMutation({
   variables: {
    writtenPlacer: match.params.id,
    desc: inputComment.value,
    author: sessionUser.getUser.userData._id,
   },
  });
  console.log(data);
  if (data.createComment) {
   toast.info("성공");
   getCommentRefetch();
   inputComment.setValue("");
  } else {
   toast.error("실패");
  }
 };

 const trueCommentHendler = () => {
  setCommentBoolean(true);
 };
 const falseCommentHendler = () => {
  setCommentBoolean(false);
  inputComment.setValue("");
 };

 useEffect(() => {
  setImagePath(getOneBoardDatum && getOneBoardDatum.getOneBoard.imgPath);
 }, []);

 return (
  <MM_DPresenter
   getOneBoardDatum={getOneBoardDatum && getOneBoardDatum.getOneBoard}
   getDetailUserDatum={getDetailUserDatum && getDetailUserDatum.getDetailUser}
   imagePath={imagePath}
   sessionUser={sessionUser}
   inputComment={inputComment}
   followerUpdateHandler={followerUpdateHandler}
   followerDeleteHandler={followerDeleteHandler}
   trueCommentHendler={trueCommentHendler}
   falseCommentHendler={falseCommentHendler}
   commentBoolean={commentBoolean}
   commentCreateHandler={commentCreateHandler}
   getCommentDatum={getCommentDatum && getCommentDatum.getComment}
  ></MM_DPresenter>
 );
};

export default MM_DContainer;
