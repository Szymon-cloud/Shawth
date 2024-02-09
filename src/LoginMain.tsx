import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import LoginApp from "./LoginApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <LoginApp />
    </ChakraProvider>
  </React.StrictMode>
);
