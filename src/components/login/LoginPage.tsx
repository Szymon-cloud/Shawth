import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import "../../index.css";
import LogReg from "./LogReg";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <LogReg />
    </ChakraProvider>
  </React.StrictMode>
);
