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
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

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

const SelectBox = styled.select`
 outline: none;
 border: none;
 background: none;
 background-color: #f0f0f0;
 width: 160px;
 height: 40px;
 padding: 10px;
 border-top-left-radius: 5px;
 border-bottom-left-radius: 5px;
`;
const OptionBox = styled.option``;

const CommentWrapper = styled(Wrapper)`
 border: 1px solid lightgray;
 border-radius: 15px;
`;

const CommentWholeWrapper = styled(Wrapper)`
 overflow-x: hidden;
 overflow-y: auto;
 height: 300px;
 color: black;
 justify-content: flex-start;
`;

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

const BackWrapper = styled(Wrapper)`
 padding: 0;
 width: 1000px;
 height: 100%;
 flex-direction: row;
 align-items: flex-start;
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
 width: ${(props) => props.width || `50px`};
 height: ${(props) => props.height || `50px`};
 border-radius: 100%;
 background-size: cover;
`;

const SetBoardBtn = styled.button`
 outline: none;
 border: none;
 background: none;
 cursor: pointer;
 width: 50px;
 height: 40px;
 border-top-right-radius: 5px;
 border-bottom-right-radius: 5px;
 background-color: black;
 color: white;
`;

const LeftBackImgWrapper = styled.img`
 width: 100%;
 height: auto;
 background-size: cover;
 border-top-left-radius: 30px;
 border-bottom-left-radius: 30px;
 transition: 0.2s;
 z-index: 90;
 /* &:hover {
  margin: 0px 0px 0px 500px;
  width: auto;
  border-radius: 30px; */
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

const CommentBtn = styled.button`
 outline: none;
 border: none;
 background: none;
 font-size: 13px;
 color: #bdc3c7;
 padding: 0;
 margin: 3px;
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
 getAllBoardDatum,
 moveLinkHandler,
 inputDesc,
 _isDialogOpenToggle,
 isDialogOpen,
 commentUpdate,
 commentDelete,
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
      {sessionStorage.getItem("login") ? (
       getOneBoardDatum ? (
        getOneBoardDatum.author._id === sessionUser.getUser.userData._id ? (
         <Wrapper height={"100px"} dr={"row"}>
          <Wrapper dr={`row`} ju={"flex-start"}>
           <Wrapper width={"40px"}>
            <MdMoreHoriz size="35"></MdMoreHoriz>
           </Wrapper>
           <Wrapper width={"40px"}>
            <FiShare size="30"></FiShare>
           </Wrapper>
          </Wrapper>
          <Wrapper></Wrapper>
         </Wrapper>
        ) : (
         <Wrapper height={"100px"} dr={"row"}>
          <Wrapper dr={`row`} ju={"flex-start"}>
           <Wrapper width={"40px"}>
            <MdMoreHoriz size="35"></MdMoreHoriz>
           </Wrapper>
           <Wrapper width={"40px"}>
            <FiShare size="30"></FiShare>
           </Wrapper>
          </Wrapper>
          <Wrapper dr={`row`}>
           <SelectBox>
            <OptionBox>a</OptionBox>
            <OptionBox>b</OptionBox>
            <OptionBox>c</OptionBox>
            <OptionBox>d</OptionBox>
            <OptionBox>e</OptionBox>
           </SelectBox>
           <SetBoardBtn>저장</SetBoardBtn>
          </Wrapper>
         </Wrapper>
        )
       ) : (
        ""
       )
      ) : (
       ""
      )}
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
          getOneBoardDatum.author._id === sessionUser.getUser.userData._id ? (
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
              return data.author._id === sessionUser.getUser.userData._id ? (
               <Wrapper
                width={"400px"}
                height={"auto"}
                margin={"20px 0px 0px 50px"}
                dr={`row`}
                al={"flex-start"}
                ju={"flex-end"}
                key={idx}
               >
                <Wrapper padding={`0`} width={"auto"}>
                 <CommentWrapper
                  al={`flex-start`}
                  width={"auto"}
                  height={"100%"}
                  padding={"10px"}
                  margin={"0px 10px 0px 0px"}
                 >
                  <Wrapper pading={"0"} dr={`row`} fs={"15px"}>
                   <Wrapper
                    padding={"0"}
                    margin={`0px 10px 0px 0px`}
                    fs={"14px"}
                    al={`flex-end`}
                   >
                    {data.createdAt.substring(5, 11)}
                   </Wrapper>
                   {data.author.nickName}
                  </Wrapper>
                  <Wrapper pading={"0"} al={"flex-start"} fs={"13px"}>
                   {data.desc}
                  </Wrapper>
                 </CommentWrapper>
                 <Wrapper
                  dr={`row`}
                  ju={"flex-start"}
                  padding={"0"}
                  color={"#bdc3c7"}
                 >
                  {/* <MdMoreHoriz size="20"></MdMoreHoriz> */}
                  <CommentBtn
                   onClick={() => _isDialogOpenToggle(data._id, data.desc)}
                  >
                   수정
                  </CommentBtn>
                  <CommentBtn onClick={() => commentDelete(data._id)}>
                   삭제
                  </CommentBtn>
                 </Wrapper>
                </Wrapper>
                <ProFileWrapper src={data.author.profileImage}></ProFileWrapper>
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
                <ProFileWrapper src={data.author.profileImage}></ProFileWrapper>
                <CommentWrapper
                 al={"flex-start"}
                 width={"auto"}
                 height={"100%"}
                 padding={"10px"}
                 margin={"0px 0px 0px 10px"}
                >
                 <Wrapper pading={"0"} dr={`row`} fs={"15px"}>
                  {data.author.nickName}
                  <Wrapper
                   padding={"0"}
                   margin={`0px 0px 0px 10px`}
                   color={"#bdc3c7"}
                   fs={"14px"}
                   al={`flex-start`}
                  >
                   {data.createdAt.substring(5, 11)}
                  </Wrapper>
                 </Wrapper>
                 <Wrapper pading={"0"} al={"flex-start"} fs={"13px"}>
                  {data.desc}
                 </Wrapper>
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
                <ProFileWrapper src={data.author.profileImage}></ProFileWrapper>
                <CommentWrapper
                 al={"flex-start"}
                 width={"auto"}
                 height={"100%"}
                 padding={"10px"}
                 margin={"0px 0px 0px 10px"}
                >
                 <Wrapper pading={"0"} dr={`row`} fs={"15px"}>
                  {data.author.nickName}
                  <Wrapper
                   padding={"0"}
                   margin={`0px 0px 0px 10px`}
                   color={"#bdc3c7"}
                   fs={"14px"}
                   al={`flex-start`}
                  >
                   {data.createdAt.substring(5, 11)}
                  </Wrapper>
                 </Wrapper>
                 <Wrapper pading={"0"} al={"flex-start"} fs={"13px"}>
                  {data.desc}
                 </Wrapper>
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
   <TitleWrapper>다른 사진 더보기</TitleWrapper>
   <Wrapper dr={`row`}>
    <Wrapper width={"13%"}></Wrapper>
    <Wrapper
     width={"80%"}
     wr={"wrap"}
     dr={"row"}
     al={`flex-start`}
     ju={"flex-start"}
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
              <ProFileWrapper
               width={"30px"}
               height={"30px"}
               src={data.author.profileImage}
              ></ProFileWrapper>
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
   {/* Dialog Area */}
   {/**====================================================================== */}
   <Dialog
    // onClose={_isDialogOpenToggle}
    aria-labelledby="customized-dialog-title"
    open={isDialogOpen}
    fullWidth={true}
   >
    <DialogTitle
     id="customized-dialog-title"
     onClose={_isDialogOpenToggle}
     // class="dialog_title"
    >
     댓글 수정
    </DialogTitle>
    <DialogContent>
     <Wrapper>
      <TextArea
       {...inputDesc}
       placeholder={"수정할 내용을 작성해주세요"}
      ></TextArea>
     </Wrapper>
    </DialogContent>
    <DialogActions>
     <Button color="primary" onClick={commentUpdate}>
      수정하기
     </Button>
     <Button color="secondary" onClick={_isDialogOpenToggle}>
      취소
     </Button>
    </DialogActions>
   </Dialog>

   {/* Dialog Area */}
  </Wrapper>
 );
};

export default MM_DPresenter;
