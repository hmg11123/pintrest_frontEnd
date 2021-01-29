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
   <Wrapper width={`25%`} onClick={() => moveLinkHandler("")}>
    로고?f
   </Wrapper>
   <Wrapper width={`50%`}>
    <SearchBox
     placeholder={`검색`}
     onKeyDown={(e) => e.keyCode === 13 && changeSearchValueHandler()}
    ></SearchBox>
   </Wrapper>
   <Wrapper width={`25%`} dr={`row`}>
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
