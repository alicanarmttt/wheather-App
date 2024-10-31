import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}

export default RouterConfig;
