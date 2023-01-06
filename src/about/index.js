import React from 'react';
import {createRoot} from "react-dom/client";
import {Typography} from "@mui/material";

function App() {
  return (
    <Typography>
      hi
    </Typography>
  );
  
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)

reportWebVitals(sendToVercelAnalytics);