import { useMutation, useQuery } from "react-apollo-hooks";
import React, { useEffect, useState } from "react";
import MM00Presenter from "./MM00Presenter";
import { GET_All_BOARD } from "./MM00Queries";

const MM00Container = ({ history }) => {
 const [isDisplay, setIsDisplay] = useState(true);

 const {
  data: getAllBoardDatum,
  loading: getAllBoardLoading,
  refetch: getAllBoardRefetch,
 } = useQuery(GET_All_BOARD);

 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };
 const hoverImgHandler = () => {
  const box = document.getElementById("whiteBox");
  box.style.display = "flex";
  box.style.width = "400px";
 };
 useEffect(() => {
  getAllBoardRefetch();
 }, []);

 return (
  <MM00Presenter
   moveLinkHandler={moveLinkHandler}
   getAllBoardDatum={getAllBoardDatum && getAllBoardDatum.getAllBoard}
   isDisplay={isDisplay}
   hoverImgHandler={hoverImgHandler}
  ></MM00Presenter>
 );
};

export default MM00Container;
