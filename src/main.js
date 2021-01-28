import React from "react";
import ReactDom from "react-dom";
import App from "./Components/App";
import Client from "./apollo/Client";
import { ApolloProvider } from "react-apollo-hooks";

ReactDom.render(
 <ApolloProvider client={Client}>
  <App />
 </ApolloProvider>,
 document.getElementById("app")
);
