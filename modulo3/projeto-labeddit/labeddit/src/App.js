import React, { useState } from "react";
import Router from "./routes/Router";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  const token = localStorage.getItem("tokenLabeddit");
  const [login_logout, setLogin_logout] = useState(token ? "Logout" : "Login");

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header login_logout={login_logout} setLogin_logout={setLogin_logout} />
        <Router login_logout={login_logout} setLogin_logout={setLogin_logout} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
