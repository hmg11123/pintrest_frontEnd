import React from "react";
import { Wrapper } from "../../Components/commonComponents";
import styled from "styled-components";
import { toast } from "react-toastify";

const SearchBox = styled.input`
 outline: none;
 background: none;
 border: none;
 width: 600px;
 height: 40px;
 background-color: white;
 padding: 10px;
 border-radius: 50px;

 &:focus {
  border: 4px solid rgba(0, 0, 0, 0.2);
 }
`;

const LoginBtn = styled.div`
 width: 100px;
 height: 100%;
 border: 1px solid white;
 padding: 10px;
 margin: 10px;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: 0.5s;

 &:hover {
  box-shadow: 3px 5px 7px rgba(255, 255, 255);
 }
`;

const LogoImg = styled.img`
 width: 30px;
 height: 30px;
 background-color: white;
 border-radius: 100px;
 &:hover {
  /* border: 6px solid gray; */
  background-color: gray;
 }
`;

const Header = ({ history }) => {
 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };
 const logout = (link) => {
  history.push(`/${link}`);
  sessionStorage.removeItem("login");
  toast.info("로그아웃하셧습니다.");
 };
 return (
  <Wrapper bc={`black`} color={`white`} heigth={`150px`} dr={`row`}>
   <Wrapper width={`15%`} onClick={() => moveLinkHandler("")}>
    <LogoImg src="http://src.wizad.co.kr/wizbbs/data/shopimg/A1517565275659_pinterest-logo.png"></LogoImg>
   </Wrapper>
   <Wrapper width={`50%`}>
    <SearchBox
     placeholder={`검색`}
     onKeyDown={(e) => e.keyCode === 13 && changeSearchValueHandler()}
    ></SearchBox>
   </Wrapper>
   <Wrapper width={`35%`} dr={`row`}>
    {window.sessionStorage.getItem("login") ? (
     <Wrapper dr={`row`}>
      <LoginBtn
       onClick={() =>
        moveLinkHandler(
         `myPage/${
          JSON.parse(sessionStorage.getItem("login")).getUser.userData._id
         }`
        )
       }
      >
       마이페이지
      </LoginBtn>
      <LoginBtn onClick={() => logout("")}>로그아웃</LoginBtn>
      <LoginBtn
       onClick={() =>
        moveLinkHandler(
         `createBoard/${
          JSON.parse(sessionStorage.getItem("login")).getUser.userData._id
         }`
        )
       }
      >
       사진올리기
      </LoginBtn>
     </Wrapper>
    ) : (
     <Wrapper dr={`row`}>
      <LoginBtn onClick={() => moveLinkHandler("signIn")}>로그인</LoginBtn>
      <LoginBtn onClick={() => moveLinkHandler("signUp")}>회원가입</LoginBtn>
     </Wrapper>
    )}
   </Wrapper>
  </Wrapper>
 );
};

export default Header;
