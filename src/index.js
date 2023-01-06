import './index.css';
import Router from "./router";
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById('root'))

root.render(
  <Router/>
)
