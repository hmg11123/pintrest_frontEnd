import React from "react";
import styled from "styled-components";
import { Wrapper, CommenImgBox } from "../../../Components/commonComponents";

const WhiteWrapper = styled(Wrapper)`
 width: 100%;
 height: auto;
 border-radius: 20px;
 z-index: 3;
 transition: 0.5s;
 &:hover {
  width: 100%;
  height: auto;
  border-radius: 20px;
  /* position: absolute; */
  z-index: 3;
  background-color: #ffffff;
  opacity: 50%;
 }
`;
const ImgBoxWrapper = styled(Wrapper)`
 z-index: 2;
 transition: 0.2s;
 border-radius: 20px;
 position: relative;
 /* &:hover {
  background-color: white;
  position: absolute;
 } */
`;

const MM00Presenter = ({
 getAllBoardDatum,
 moveLinkHandler,
 isDisplay,
 hoverImgHandler,
}) => {
 return (
  <Wrapper>
   <Wrapper width={"1350px"} wr={"wrap"} dr={"row"}>
    {getAllBoardDatum ? (
     getAllBoardDatum.length === 0 ? (
      <Wrapper>공지사항이 없습니다.</Wrapper>
     ) : (
      getAllBoardDatum.map((data, idx) => {
       return (
        <ImgBoxWrapper
         width={"230px"}
         heigth={"auto"}
         margin={"10px"}
         key={idx}
         onClick={() => moveLinkHandler(`detail/${data._id}`)}
        >
         <Wrapper padding={"0"}>
          <WhiteWrapper>
           <CommenImgBox
            zIndex={"1"}
            isDisplay={true}
            radius={"20px"}
            src={data.imgPath}
            //    onClick={() => showWrapperHandler(
           ></CommenImgBox>
          </WhiteWrapper>
          <Wrapper dr={"row"}>{data.title}</Wrapper>
         </Wrapper>
        </ImgBoxWrapper>
       );
      })
     )
    ) : (
     "loading..."
    )}
   </Wrapper>
  </Wrapper>
 );
};

export default MM00Presenter;
