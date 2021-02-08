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
  background-color: #ffffff;
  color: #000000;
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
const ProFileWrapper = styled(CommenImgBox)`
 width: 30px;
 height: 30px;
 border-radius: 100%;
 background-size: cover;
`;

const MM00Presenter = ({
 getAllBoardDatum,
 moveLinkHandler,
 isDisplay,
 hoverImgHandler,
}) => {
 return (
  <Wrapper dr={`row`}>
   <Wrapper width={"13%"}></Wrapper>
   <Wrapper
    width={"80%"}
    heigth={`auto`}
    wr={"wrap"}
    dr={"row"}
    al={`none`}
    ju={"none"}
    padding={"0"}
   >
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
         padding={"0"}
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
           <Wrapper dr={"row"} ju={"flex-start"}>
            <Wrapper padding={"0"} width={"30px"}>
             <ProFileWrapper src={data.author.profileImage}></ProFileWrapper>
            </Wrapper>
            <Wrapper width={"20px"} padding={"0"} margin={"0px 0px 0px 5px"}>
             {data.author.nickName}
            </Wrapper>
            <Wrapper padding={"0"} margin={"10px"} fs={"18px"}>
             {data.title}
            </Wrapper>
           </Wrapper>
          </WhiteWrapper>
         </Wrapper>
        </ImgBoxWrapper>
       );
      })
     )
    ) : (
     "loading..."
    )}
   </Wrapper>
   <Wrapper width={"7%"}></Wrapper>
  </Wrapper>
 );
};

export default MM00Presenter;
