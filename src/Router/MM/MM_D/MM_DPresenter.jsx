import React from "react";
import {
 TextBox,
 TitleWrapper,
 Wrapper,
 OriginFileBtn,
 CommenImgBox,
 LineWrapper,
} from "../../../Components/commonComponents";
import styled from "styled-components";
import { MdMoreHoriz } from "react-icons/md";
import { FiShare } from "react-icons/fi";

const FollowerBtn = styled.button`
 cursor: pointer;
 outline: none;
 border: none;
 width: 200px;
 height: 40px;
 padding: 10px;
 background-color: #e6e4e4;
 border-radius: 100px;
 &:hover {
  background-color: lightgray;
 }
`;

const CommentWrapper = styled(Wrapper)`
 border: 1px solid lightgray;
 border-radius: 15px;
`;

const CommentWholeWrapper = styled(Wrapper)`
 overflow-y: auto;
 height: 300px;
 color: black;
 justify-content: flex-start;
`;

const BackWrapper = styled(Wrapper)`
 padding: 0;
 width: 1000px;
 height: 700px;
 flex-direction: row;
 box-shadow: 5px 7px 4px #313131;
 border-radius: 30px;
 background-color: white;
`;

const LeftBackWrapper = styled(Wrapper)`
 padding: 0;
 width: 50%;
 height: 100%;
 border-top-left-radius: 30px;
 border-bottom-left-radius: 30px;
 /* background-color: #cecece; */
 display: flex;
 justify-content: flex-start;
 align-items: flex-start;
`;

const ProFileWrapper = styled(CommenImgBox)`
 width: 50px;
 height: 50px;
 border-radius: 100%;
 background-size: cover;
`;

const LeftBackImgWrapper = styled.img`
 width: 100%;
 height: 100%;
 background-size: cover;
 border-top-left-radius: 30px;
 border-bottom-left-radius: 30px;
 transition: 0.2s;
 z-index: 90;
 &:hover {
  margin: 0px 0px 0px 500px;
  width: auto;
  border-radius: 30px;
  /* opacity: 80%; */
 }
`;
const RightBackWrapper = styled(Wrapper)`
 padding: 0;
 width: 50%;
 border-top-right-radius: 30px;
 border-bottom-right-radius: 30px;
 color: black;
`;
const CommentTitleWrapper = styled(Wrapper)`
 border-bottom: 3px solid black;
`;

const TextArea = styled.textarea`
 outline: none;
 border: none;
 width: 300px;
 height: 40px;
 color: ${(props) => props.color};
 background-color: ${(props) => props.bgColor};
 resize: none;
 padding: 10px;
 border-radius: 15px;
 border: 1px solid lightgray;
 word-wrap: wrap;

 &:focus {
  border: none;
  height: 100%;
 }
`;

const CheckBtn = styled.button`
 cursor: pointer;
 outline: none;
 border: none;
 background-color: white;
 border: 1px solid #2ecc71;
 color: #2ecc71;
 width: 60px;
 height: 40px;
 padding: 10px;
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 10px;
 &:hover {
  color: white;
  background-color: #2ecc71;
 }
`;

const DeleteBtn = styled.button`
 cursor: pointer;
 outline: none;
 border: none;
 background-color: white;
 border: 1px solid #e74c3c;
 color: #e74c3c;
 width: 60px;
 height: 40px;
 padding: 10px;
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 10px;
 &:hover {
  color: white;
  background-color: #e74c3c;
 }
`;

const MM_DPresenter = ({
 inputComment,
 getOneBoardDatum,
 getDetailUserDatum,
 followerUpdateHandler,
 followerDeleteHandler,
 sessionUser,
 trueCommentHendler,
 falseCommentHendler,
 getCommentDatum,
 commentBoolean,
 commentCreateHandler,
}) => {
 return (
  <Wrapper>
   <Wrapper dr={`row`} margin={`0px 0px 100px 0px`}>
    <BackWrapper>
     <LeftBackWrapper>
      <Wrapper padding={"0"} height={"100%"} ju={"flex-start"}>
       <LeftBackImgWrapper
        src={getOneBoardDatum ? getOneBoardDatum.imgPath : ""}
       ></LeftBackImgWrapper>
      </Wrapper>
     </LeftBackWrapper>

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
      {getOneBoardDatum ? (
       getOneBoardDatum.title === "" ? (
        ""
       ) : (
        <Wrapper
         height={"30px"}
         fs={"25px"}
         fw={"600"}
         al={`flex-start`}
         margin={"0px 0px 0px 20px"}
        >
         {getOneBoardDatum.title}
        </Wrapper>
       )
      ) : (
       ""
      )}
      <Wrapper height={"80px"} dr={`row`} al={"flex-start"} ju={"flex-start"}>
       <Wrapper dr={`row`} ju={`flex-start`}>
        <Wrapper padding={"0"} width={"60px"}>
         <ProFileWrapper
          src={getDetailUserDatum ? getDetailUserDatum.profileImage : ""}
         />
        </Wrapper>
        <Wrapper width={"300px"} al={`flex-start`}>
         <Wrapper width={"300px"} al={`flex-start`}>
          {getDetailUserDatum ? getDetailUserDatum.nickName : ""}
         </Wrapper>
         <Wrapper width={"300px"} al={`flex-start`}>
          팔로워: {getDetailUserDatum ? getDetailUserDatum.follower.length : ""}
          명
         </Wrapper>
        </Wrapper>

        {sessionStorage.getItem("login") ? (
         getOneBoardDatum ? (
          getOneBoardDatum.author === sessionUser.getUser.userData._id ? (
           <Wrapper></Wrapper>
          ) : getDetailUserDatum ? (
           getDetailUserDatum.follower.indexOf(
            sessionUser.getUser.userData._id
           ) === -1 ? (
            <FollowerBtn onClick={() => followerUpdateHandler()}>
             팔로우
            </FollowerBtn>
           ) : (
            <FollowerBtn onClick={() => followerDeleteHandler()}>
             팔로우취소
            </FollowerBtn>
           )
          ) : (
           ""
          )
         ) : (
          <Wrapper></Wrapper>
         )
        ) : (
         ""
        )}
       </Wrapper>
      </Wrapper>
      <Wrapper margin={"30px 0px 0px 0px"}>
       <Wrapper
        height={"10px"}
        dr={"row"}
        ju={"flex-start"}
        margin={"0px 0px 0px 60px"}
       >
        <CommentTitleWrapper padding={"0px 0px 10px 0px"} width={"35px"}>
         댓글
        </CommentTitleWrapper>
       </Wrapper>
       <CommentWholeWrapper>
        {getCommentDatum
         ? getCommentDatum.length === 0
           ? "댓글이 없습니다"
           : sessionStorage.getItem("login")
           ? getCommentDatum.map((data, idx) => {
              return data.author === sessionUser.getUser.userData._id ? (
               <Wrapper
                width={"400px"}
                height={"auto"}
                margin={"20px 0px 0px 50px"}
                dr={`row`}
                al={"flex-start"}
                ju={"flex-end"}
                key={idx}
               >
                <CommentWrapper
                 al={`flex-start`}
                 width={"auto"}
                 height={"100%"}
                 padding={"10px"}
                 margin={"0px 10px 0px 0px"}
                >
                 {data.desc}
                </CommentWrapper>
                <ProFileWrapper src=""></ProFileWrapper>
               </Wrapper>
              ) : (
               <Wrapper
                height={"auto"}
                margin={"20px 0px 0px 50px"}
                dr={`row`}
                al={"flex-start"}
                ju={"flex-start"}
                key={idx}
               >
                <ProFileWrapper src=""></ProFileWrapper>
                <CommentWrapper
                 al={"flex-start"}
                 width={"auto"}
                 height={"100%"}
                 padding={"10px"}
                 margin={"0px 0px 0px 10px"}
                >
                 {data.desc}
                </CommentWrapper>
               </Wrapper>
              );
             })
           : getCommentDatum.map((data, idx) => {
              return (
               <Wrapper
                height={"auto"}
                margin={"20px 0px 0px 50px"}
                dr={`row`}
                al={"flex-start"}
                ju={"flex-start"}
                key={idx}
               >
                <ProFileWrapper src=""></ProFileWrapper>
                <CommentWrapper
                 al={"flex-start"}
                 width={"auto"}
                 height={"100%"}
                 padding={"10px"}
                 margin={"0px 0px 0px 10px"}
                >
                 {data.desc}
                </CommentWrapper>
               </Wrapper>
              );
             })
         : "loading..."}
       </CommentWholeWrapper>

       {sessionStorage.getItem(`login`) ? (
        <Wrapper height={"100px"} dr={`row`} ju={"flex-start"}>
         {/* <LineWrapper height={"5px"}></LineWrapper> */}
         <ProFileWrapper
          margin={"0px 15px 0px 20px"}
          src={
           JSON.parse(sessionStorage.getItem(`login`)).getUser.userData
            .profileImage
          }
         />
         <TextArea
          {...inputComment}
          onClick={() => trueCommentHendler()}
          placeholder="댓글을 작성해주세요"
         ></TextArea>
        </Wrapper>
       ) : (
        ""
       )}
       {commentBoolean ? (
        <Wrapper dr={`row`} height={"100px"}>
         <DeleteBtn onClick={() => falseCommentHendler()}>취소</DeleteBtn>
         <CheckBtn onClick={() => commentCreateHandler()}>등록</CheckBtn>
        </Wrapper>
       ) : (
        ""
       )}
      </Wrapper>
     </RightBackWrapper>
    </BackWrapper>
   </Wrapper>
  </Wrapper>
 );
};

export default MM_DPresenter;
