import React from "react";
import {
 Wrapper,
 TitleWrapper,
 TextBox,
} from "../../../Components/commonComponents";
import styled from "styled-components";

const LoginBtn = styled.button`
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

const MM02Presenter = ({ inputEmail, inputPassWord, loginHandler }) => {
 return (
  <Wrapper>
   <TitleWrapper>로그인</TitleWrapper>
   <TextBox width={"300px"} {...inputEmail} placeholder="이메일"></TextBox>
   <TextBox
    width={"300px"}
    {...inputPassWord}
    type="password"
    placeholder="비밀번호"
   ></TextBox>
   <LoginBtn onClick={loginHandler}>로그인</LoginBtn>
  </Wrapper>
 );
};

export default MM02Presenter;
