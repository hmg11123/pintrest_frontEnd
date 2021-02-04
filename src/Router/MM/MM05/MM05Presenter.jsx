import React from "react";
import {
 TextBox,
 TitleWrapper,
 Wrapper,
 OriginFileBtn,
} from "../../../Components/commonComponents";
import styled from "styled-components";
import { MdMoreHoriz } from "react-icons/md";
import { FiShare } from "react-icons/fi";

const MM05Presenter = ({
 fileChangeHandler,
 imagePath,
 chageBtn,
 createHandler,
 inputTitle,
 chooseType,
 selectBoxHandler,
}) => {
 const SelectBox = styled.select`
  outline: none;
  border: none;
  background: none;
  background-color: white;
  width: 100px;
  height: 20px;
  border-radius: 5px;
 `;
 const OptionBox = styled.option``;

 const BackWrapper = styled(Wrapper)`
  padding: 0;
  width: 1000px;
  height: 700px;
  flex-direction: row;
  box-shadow: 3px 4px 3px gray;
  border-radius: 30px;
  background-color: white;
 `;

 const LeftBackWrapper = styled(Wrapper)`
  padding: 0;
  width: 50%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: #cecece;
 `;

 const LeftBackImgWrapper = styled.img`
  width: 50%;
  height: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
 `;
 const RightBackWrapper = styled(Wrapper)`
  padding: 0;
  width: 50%;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  color: black;
 `;
 const CommentTitleWrapper = styled(Wrapper)`
  &:hover {
   border-bottom: 3px solid black;
  }
  &:focus {
   border-bottom: 3px solid black;
  }
 `;

 const AddImageBtn = styled.label`
  outline: none;
  background: none;
  border: none;
  width: 200px;
  height: 60px;
  border: 1px solid black;
  background-color: white;
  color: black;
  transition: 0.5s;
  border-radius: 10px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
   background-color: black;
   color: white;
  }
 `;

 const UploadBtn = styled.button`
  margin: 0px 0px 100px 0px;
  outline: none;
  border: none;
  background: none;
  width: 200px;
  height: 40px;
  transition: 0.5s;
  border: 2px solid #90d528;
  color: #90d528;

  &:hover {
   background-color: #90d528;
   color: white;
  }
 `;
 return (
  <Wrapper>
   <Wrapper dr={`row`}>
    <Wrapper width={"25%"}></Wrapper>
    <Wrapper width={"50"}>
     <TitleWrapper>사진올리기</TitleWrapper>
    </Wrapper>
    <Wrapper width={"25%"}>
     <SelectBox {...chooseType}>
      <OptionBox value="자유">자유</OptionBox>
      <OptionBox value="사진">사진</OptionBox>
      <OptionBox value="일러스트">일러스트</OptionBox>
     </SelectBox>
    </Wrapper>
   </Wrapper>

   <Wrapper>
    <TextBox
     width={"300px"}
     {...inputTitle}
     placeholder="원하시면 제목을 입력해주세요"
    ></TextBox>
   </Wrapper>

   <Wrapper dr={`row`} margin={`0px 0px 100px 0px`}>
    <BackWrapper>
     {chageBtn === true ? (
      <LeftBackImgWrapper src={imagePath}></LeftBackImgWrapper>
     ) : (
      <LeftBackWrapper>
       <OriginFileBtn type="file" id="uploadImg" onChange={fileChangeHandler} />
       <AddImageBtn htmlFor="uploadImg">사진등록</AddImageBtn>
      </LeftBackWrapper>
     )}
     <RightBackWrapper>
      <Wrapper height={"100px"} dr={"row"}>
       <Wrapper dr={`row`} ju={"flex-start"}>
        <Wrapper width={"40px"}>
         <MdMoreHoriz size="35"></MdMoreHoriz>
        </Wrapper>
        <Wrapper width={"40px"}>
         <FiShare size="30"></FiShare>
        </Wrapper>
       </Wrapper>
       <Wrapper>C</Wrapper>
      </Wrapper>
      <Wrapper height={"80px"} dr={`row`} al={"flex-start"}>
       <TitleWrapper
        ju={"flex-start"}
        al={"flex-start"}
        margin={"0px 0px 0px 20px"}
       >
        업로드한 사람:{" "}
        {JSON.parse(sessionStorage.getItem("login")).getUser.userData.nickName}
       </TitleWrapper>
      </Wrapper>
      <Wrapper
       height={"10px"}
       dr={"row"}
       ju={"flex-start"}
       margin={"0px 0px 0px 60px"}
      >
       <CommentTitleWrapper width={"50px"}>댓글</CommentTitleWrapper>
      </Wrapper>
      <Wrapper>
       <Wrapper></Wrapper>
       <Wrapper>
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
       </Wrapper>
      </Wrapper>
     </RightBackWrapper>
    </BackWrapper>
   </Wrapper>

   <Wrapper>
    <UploadBtn onClick={() => createHandler()}>사진 올리기</UploadBtn>
   </Wrapper>
  </Wrapper>
 );
};

export default MM05Presenter;
