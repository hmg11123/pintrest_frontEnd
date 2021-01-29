import React from "react";
import styled from "styled-components";
import {
 Wrapper,
 TitleWrapper,
 TextBox,
} from "../../../Components/commonComponents";

const AddressBtn = styled.button`
 outline: none;
 background: none;
 border: none;
 cursor: pointer;
 width: ${(props) => props.width};
 height: 40px;
 border: 1px solid white;
 color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 0px 0px 0px 10px;
 transition: 0.2s;

 &:hover {
  box-shadow: 3px 5px 7px white;
 }
`;

const SignUpBtn = styled.button`
 outline: none;
 background: none;
 border: none;
 cursor: pointer;
 width: 200px;
 height: 40px;
 transition: 0.2s;
 margin: 30px 0px;
 border: 1px solid greenyellow;
 color: greenyellow;
 &:hover {
  box-shadow: 3px 5px 7px greenyellow;
 }
`;

const MM01Presenter = ({
 newName,
 newEmail,
 newMobile,
 newAddress,
 newDetailAddress,
 newZoneCode,
 newBirth,
 searchPostHandler,
 newPassWord,
 signUpHandler,
 checkPassWord,
 nickNameCheckHandler,
 newNickName,
}) => {
 return (
  <Wrapper>
   <TitleWrapper>회원가입</TitleWrapper>
   <Wrapper>
    <Wrapper width={`400px`} dr={`row`}>
     <TextBox width={"200px"} {...newNickName} placeholder="닉네임"></TextBox>
     <AddressBtn width={"90px"} onClick={nickNameCheckHandler}>
      닉네임 확인
     </AddressBtn>
    </Wrapper>
    <TextBox
     width={"300px"}
     type="password"
     {...newPassWord}
     placeholder="비밀번호"
    ></TextBox>
    <TextBox
     width={"300px"}
     {...checkPassWord}
     type="password"
     placeholder="비밀번호 확인"
    ></TextBox>
    <TextBox width={"300px"} {...newName} placeholder="이름"></TextBox>
    <TextBox width={"300px"} {...newEmail} placeholder="이메일"></TextBox>
    <TextBox width={"300px"} {...newMobile} placeholder="전화번호"></TextBox>
    <TextBox width={"300px"} {...newBirth} placeholder="생년월일"></TextBox>
    <Wrapper width={"400px"} dr={`row`}>
     <TextBox
      width={"200px"}
      {...newZoneCode}
      placeholder="우편번호"
      readOnly
     ></TextBox>
     <AddressBtn width={"90px"} onClick={searchPostHandler}>
      주소찾기
     </AddressBtn>
    </Wrapper>

    <TextBox
     width={"300px"}
     {...newAddress}
     placeholder="주소"
     readOnly
    ></TextBox>
    <TextBox
     width={"300px"}
     {...newDetailAddress}
     placeholder="상세주소"
    ></TextBox>
   </Wrapper>

   <Wrapper>
    <SignUpBtn onClick={signUpHandler}>회원가입</SignUpBtn>
   </Wrapper>
  </Wrapper>
 );
};

export default MM01Presenter;
