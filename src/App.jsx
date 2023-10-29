import React from "react";
import { Form, Vector, Stack, GlobalStyles } from "./components/index";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Stack height="100vh" justifyContent="space-around" alignItems="center">
        <Vector />
        <Form />
        <Toaster />
      </Stack>
    </>
  );
};

export default App;
