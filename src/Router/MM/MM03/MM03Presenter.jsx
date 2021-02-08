import React from "react";
import {
 Wrapper,
 TitleWrapper,
 OriginFileBtn,
 ProfileImgBox,
 PushImgBtn,
 DialogPushImgBtn,
} from "../../../Components/commonComponents";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const AddressBtn = styled.button`
 outline: none;
 background: none;
 border: none;
 cursor: pointer;
 width: ${(props) => props.width};
 height: 40px;
 border: 1px solid black;
 color: black;
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 0px 0px 0px 10px;
 transition: 0.2s;

 &:hover {
  box-shadow: 3px 5px 7px gray;
 }
`;

const ClickBtn = styled.button`
 outline: none;
 background: none;
 border: none;
 width: 150px;
 height: 40px;
 border: 1px solid white;
 margin: ${(props) => props.margin || "10px"};
 color: white;
`;

const TextBox = styled.input`
 outline: none;
 border: none;
 background: none;
 width: ${(props) => props.width};
 height: 40px;
 padding: 10px;
 margin: 20px 0px;
 transition: 0.5s;
 color: black;
 border-bottom: 2px solid black;
 &:hover {
  box-shadow: 3px 5px 1px gray;
 }

 &:focus {
  box-shadow: 3px 5px 1px gray;
 }
`;

const MyDateBox = styled.input`
 outline: none;
 border: none;
 background: none;
 width: ${(props) => props.width};
 height: 40px;
 padding: 10px;
 margin: 20px 0px;
 transition: 0.5s;
 color: white;
 border-bottom: 2px solid white;
 &:hover {
  box-shadow: 5px 7px 9px gray;
 }
`;

const MM03Presenter = ({
 updateNickName,
 updateName,
 updateEmail,
 updateMobile,
 updateAddress,
 updateDetailAddress,
 updateZoneCode,
 updateBirth,
 updateUserHandler,
 imagePath,
 fileChangeHandler,
 deleteUserHandler,
 _isDialogOpenToggle,
 moveLinkHandler,
 passWordHandler,
 isDialogOpen,
 uploadProfileImg,
 chageBtn,
 searchPostHandler,
}) => {
 return (
  <Wrapper>
   <TitleWrapper>마이페이지</TitleWrapper>
   <Wrapper>
    <Wrapper dr={`row`}>
     <Wrapper width={`25%`}></Wrapper>
     <Wrapper width={`25%`} margin={`0px 0px 500px 0px`}>
      <ProfileImgBox src={imagePath} />
      {chageBtn === false ? (
       <Wrapper>
        <OriginFileBtn
         type="file"
         id="uploadImg"
         onChange={fileChangeHandler}
        />
        <DialogPushImgBtn htmlFor="uploadImg">사진변경</DialogPushImgBtn>
       </Wrapper>
      ) : (
       <Wrapper>
        <DialogPushImgBtn onClick={() => uploadProfileImg()}>
         변경확인
        </DialogPushImgBtn>
       </Wrapper>
      )}
     </Wrapper>
     <Wrapper width={`35%`} margin={`0px 100px 0px 0px`}>
      <Wrapper dr={`row`}>
       <Wrapper width="100px">닉네임 : </Wrapper>
       <MyDateBox
        width={"200px"}
        {...updateNickName}
        type="text"
        placeholder="닉네임"
        readOnly
       ></MyDateBox>
      </Wrapper>
      <Wrapper dr={`row`}>
       <Wrapper width="100px">이름 : </Wrapper>
       <MyDateBox
        width={"200px"}
        {...updateName}
        type="text"
        placeholder="이름"
        readOnly
       ></MyDateBox>
      </Wrapper>
      <Wrapper dr={`row`}>
       <Wrapper width="100px">이메일 : </Wrapper>
       <MyDateBox
        width={"200px"}
        {...updateEmail}
        type="text"
        placeholder="이메일"
        readOnly
       ></MyDateBox>
      </Wrapper>
      <Wrapper dr={`row`}>
       <Wrapper width="100px">생년월일 : </Wrapper>
       <MyDateBox
        width={"200px"}
        {...updateBirth}
        type="text"
        placeholder="생년월일"
        readOnly
       ></MyDateBox>
      </Wrapper>
      <Wrapper dr={`row`}>
       <Wrapper width="100px">전화번호 : </Wrapper>
       <MyDateBox
        width={"200px"}
        {...updateMobile}
        type="text"
        placeholder="전화번호"
        readOnly
       ></MyDateBox>
      </Wrapper>
      <Wrapper dr={`row`}>
       <Wrapper width={`100px`}>주소 : </Wrapper>
       <MyDateBox
        width={"200px"}
        {...updateAddress}
        type="text"
        placeholder="주소"
        readOnly
       ></MyDateBox>
      </Wrapper>
      <Wrapper dr={`row`}>
       <Wrapper width={`100px`}>상세주소 : </Wrapper>
       <MyDateBox
        width={"200px"}
        {...updateDetailAddress}
        type="text"
        placeholder="상세주소"
        readOnly
       ></MyDateBox>
      </Wrapper>
      <Wrapper dr={`row`}>
       <Wrapper width={`100px`}>우편번호 : </Wrapper>
       <MyDateBox
        width={"200px"}
        {...updateZoneCode}
        type="text"
        placeholder="우편번호"
        readOnly
       ></MyDateBox>
      </Wrapper>
     </Wrapper>
     <Wrapper width={`15%`}></Wrapper>
    </Wrapper>
    <Wrapper dr={`row`} margin={`50px 0px 100px 0px`}>
     <ClickBtn onClick={() => _isDialogOpenToggle()}>회원정보수정</ClickBtn>
     <ClickBtn onClick={() => passWordHandler()}>비밀번호변경</ClickBtn>
     <ClickBtn onClick={() => deleteUserHandler()}>회원탈퇴</ClickBtn>
    </Wrapper>
   </Wrapper>

   {/* Dialog Area */}
   {/**====================================================================== */}
   <Dialog
    onClose={_isDialogOpenToggle}
    aria-labelledby="customized-dialog-title"
    open={isDialogOpen}
    fullWidth={true}
   >
    <DialogTitle
     id="customized-dialog-title"
     onClose={_isDialogOpenToggle}
     // class="dialog_title"
    >
     회원정보 수정
    </DialogTitle>
    <DialogContent>
     <Wrapper dr={`row`}>
      <Wrapper>
       <Wrapper dr={`row`}>
        <Wrapper width={"100px"}>닉네임 : </Wrapper>
        <TextBox
         width={"200px"}
         {...updateNickName}
         type="text"
         placeholder="닉네임"
        ></TextBox>
       </Wrapper>
       <Wrapper dr={`row`}>
        <Wrapper width={"100px"}>이름 : </Wrapper>
        <TextBox
         width={"200px"}
         {...updateName}
         type="text"
         placeholder="이름"
        ></TextBox>
       </Wrapper>
       <Wrapper dr={"row"}>
        <Wrapper width={"100px"}>이메일 : </Wrapper>
        <TextBox
         width={"200px"}
         {...updateEmail}
         type="text"
         placeholder="이메일"
        ></TextBox>
       </Wrapper>
       <Wrapper dr={`row`}>
        <Wrapper width={"100px"}>생년월일 : </Wrapper>
        <TextBox
         width={"200px"}
         {...updateBirth}
         type="text"
         placeholder="생년월일"
        ></TextBox>
       </Wrapper>
       <Wrapper dr={`row`}>
        <Wrapper width={`100px`}>전화번호 : </Wrapper>
        <TextBox
         width={"200px"}
         {...updateMobile}
         type="text"
         placeholder="전화번호"
        ></TextBox>
       </Wrapper>
       <Wrapper dr={`row`}>
        <Wrapper width={"100px"}>우편번호 : </Wrapper>
        <TextBox
         width={"100px"}
         {...updateZoneCode}
         type="text"
         placeholder="우편번호"
        ></TextBox>
        <AddressBtn width={"90px"} onClick={searchPostHandler}>
         주소찾기
        </AddressBtn>
       </Wrapper>
       <Wrapper dr={`row`}>
        <Wrapper width={"100px"}>주소 : </Wrapper>
        <TextBox
         width={"200px"}
         {...updateAddress}
         type="text"
         placeholder="주소"
        ></TextBox>
       </Wrapper>
       <Wrapper dr={`row`}>
        <Wrapper width={`100px`}>상세주소 : </Wrapper>
        <TextBox
         width={"200px"}
         {...updateDetailAddress}
         type="text"
         placeholder="상세주소"
        ></TextBox>
       </Wrapper>
      </Wrapper>
     </Wrapper>
    </DialogContent>
    <DialogActions>
     <Button color="primary" onClick={updateUserHandler}>
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

export default MM03Presenter;
