import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
import GlobalStyles from "../styles/GlobalStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from "./AppRouter";

const App = () => {
 return (
  <ThemeProvider theme={Theme}>
   <GlobalStyles />
   <AppRouter />
   <ToastContainer position={toast.POSITION.BOTTOM_CENTER} />
  </ThemeProvider>
 );
};

export default App;
