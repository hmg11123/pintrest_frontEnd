import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import MM00 from "../../Router/MM/MM00";
import MM01 from "../../Router/MM/MM01";
import MM02 from "../../Router/MM/MM02";
import MM03 from "../../Router/MM/MM03";
import MM04 from "../../Router/MM/MM04";
import MM05 from "../../Router/MM/MM05";
import MM_D from "../../Router/MM/MM_D";

const WholeWrapper = styled.div`
 width: 100%;
 background-color: ${(props) => props.bc};
 color: ${(props) => props.color};
`;

const Content = () => {
 return (
  <WholeWrapper bc={`black`} color={`white`}>
   <Route exact path="/" component={MM00}></Route>
   <Route exact path="/signUp" component={MM01}></Route>
   <Route exact path="/signIn" component={MM02}></Route>
   <Route exact path="/myPage/:id" component={MM03}></Route>
   <Route exact path="/chagePass" component={MM04}></Route>
   <Route exact path="/createBoard/:id" component={MM05}></Route>
   <Route exact path="/detail/:id" component={MM_D}></Route>
  </WholeWrapper>
 );
};

export default Content;
