import React from "react";
import {
 TextBox,
 TitleWrapper,
 Wrapper,
} from "../../../Components/commonComponents";
import styled from "styled-components";

const CheckBtn = styled.button`
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

const MM04Presenter = ({
 inputCode,
 chageScreen,
 checkCodeHandler,
 inputPassWord,
 CheckPassWord,
 updatePassWordHandler,
}) => {
 return (
  <Wrapper>
   <TitleWrapper>비밀번호 변경</TitleWrapper>
   {chageScreen === false ? (
    <Wrapper>
     이메일에 코드를 보냈으니 확인해주십시요
     <TextBox
      width={`300px`}
      placeholder="코드를 입력하세요"
      {...inputCode}
     ></TextBox>
     <CheckBtn onClick={() => checkCodeHandler()}>확인</CheckBtn>
    </Wrapper>
   ) : (
    <Wrapper>
     <TextBox
      width={`300px`}
      type="password"
      placeholder="변경할 비밀번호를 써주세요"
      {...inputPassWord}
     ></TextBox>
     <TextBox
      width={`300px`}
      type="password"
      placeholder="비밀번호 확인"
      {...CheckPassWord}
     ></TextBox>

     <CheckBtn onClick={() => updatePassWordHandler()}>확인</CheckBtn>
    </Wrapper>
   )}
  </Wrapper>
 );
};

export default MM04Presenter;
