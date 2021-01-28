import styled from "styled-components";

export const Wrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 margin: ${(props) => props.margin || ``};
 padding: ${(props) => props.padding || `10px`};
 font-size: ${(props) => props.fs || `16px`};
 font-weight: ${(props) => props.fw || ``};

 background-color: ${(props) => props.bc || ``};
 color: ${(props) => props.color || ``};
 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 flex-wrap: ${(props) => props.wr || ``};
`;

export const TitleWrapper = styled.div`
 width: ${(props) => props.width || `600px`};
 height: ${(props) => props.height || `100%`};
 margin: ${(props) => props.margin || `50px 0px`};
 padding: ${(props) => props.padding || `10px`};
 font-size: ${(props) => props.fs || `20px`};
 font-weight: ${(props) => props.fw || `600`};

 background-color: ${(props) => props.bc || ``};
 color: ${(props) => props.color || ``};
 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 flex-wrap: ${(props) => props.wr || ``};
`;

export const TextBox = styled.input`
 outline: none;
 border: none;
 background: none;
 width: ${(props) => props.width};
 height: 40px;
 padding: 10px;
 margin: 20px 0px;
 background-color: white;
 transition: 0.5s;
 color: black;
 &:hover {
  box-shadow: 3px 5px 7px gray;
 }

 &:focus {
  box-shadow: 3px 5px 7px gray;
 }
`;
