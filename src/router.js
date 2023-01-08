import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import {createTheme, ThemeProvider, useMediaQuery} from "@mui/material";
import React from "react";

function Router() {
  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          // mode: prefersDarkMode ? 'dark' : 'light',
          // disable auto color mode, since there's no need for light mode
          mode: "dark"
        },
      }),
    [prefersDarkMode],
  );
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/about'} element={<About/>}/>
          <Route path={'*'} element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

const NotFound = () => {
  return <div>你来到了没有知识的荒原</div>
}

export default Router;