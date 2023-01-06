import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'*'} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

const NotFound = () => {
  return <div>你来到了没有知识的荒原</div>
}

export default Router;