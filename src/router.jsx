import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Subscription from "./pages/Subscription"
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

function Router() {

  const theme =
    createTheme({
      palette: {
        mode: "dark"
      }
    });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/sub'} element={<Subscription />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'white' }}>你来到了没有知识的荒原</h1>
    </div>

  )
}

export default Router;