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
 position: ${(props) => props.position};
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
 transition: 0.5s;
 color: ${(props) => props.color || `black`};
 background-color: ${(props) => props.bgColor || `white`};
 border-bottom: 2px solid white;
 &:hover {
  box-shadow: 5px 7px 9px gray;
 }

 &:focus {
  box-shadow: 5px 7px 9px gray;
 }
`;

export const OriginFileBtn = styled.input`
 display: none;
`;

export const ProfileImgBox = styled.img`
 width: 250px;
 height: 250px;
`;

export const PushImgBtn = styled.label`
 cursor: pointer;
 width: 200px;
 height: 30px;
 background-color: white;
 color: black;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 30px;
 &:hover {
  border: 1px solid gray;
 }
`;

export const DialogPushImgBtn = styled.label`
 cursor: pointer;
 width: 200px;
 height: 30px;
 background-color: black;
 color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 30px;
 transition: 0.5s;
 margin-top: 20px;
 box-shadow: 4px 6px 8px gray;
 &:hover {
  background-color: white;
  color: black;
 }
`;

export const CommenImgBox = styled.img`
 display: ${(props) => props.display};
 width: ${(props) => props.width || `100%`};
 min-width: ${(props) => props.minWidth};
 height: ${(props) => props.height || `auto`};
 align-items: ${(props) => props.al};
 justify-content: ${(props) => props.ju};
 margin: ${(props) => props.margin};
 background-color: ${(props) => props.bgColor || "white"};
 object-fit: ${(props) => props.objectFit || `cover`};
 position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
 position: ${(props) => (props.isRelative ? `relative` : ``)};
 box-shadow: ${(props) => props.shadow};
 border-radius: ${(props) => props.radius};
 z-index: ${(props) => props.zIndex};
 top: ${(props) => props.top};
 left: ${(props) => props.left};
 bottom: ${(props) => props.bottom};
 right: ${(props) => props.right};
 transition: 0.3s;
 filter: ${(props) => (props.isFilter ? `brightness(30%) opacity(0.4)` : ` `)};
 &:hover {
  filter: ${(props) => (props.isHover ? `brightness(100%) opacity(1)` : ` `)};

  box-shadow: ${(props) => (props.isShadowHover ? `15px 20px #f1f2f6` : ``)};
  box-shadow: ${(props) => (props.isShadowHover2 ? `15px -20px #f1f2f6` : ``)};
  box-shadow: ${(props) => (props.isShadowHover3 ? `-15px 20px #f1f2f6` : ``)};
  box-shadow: ${(props) => (props.isShadowHover4 ? `-15px -20px #f1f2f6` : ``)};
 }
`;

export const LineWrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 border-bottom: ${(props) => props.border || `4px solid #bdc3c7`};
`;
