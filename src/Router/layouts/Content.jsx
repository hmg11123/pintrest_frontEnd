import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import MM00 from "../../Router/MM/MM00";
import MM01 from "../../Router/MM/MM01";
import MM02 from "../../Router/MM/MM02";

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
  </WholeWrapper>
 );
};

export default Content;
