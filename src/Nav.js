import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerLayout from "./players/Layout";
import DataLayout from "./project/DataLayout";

const Nav = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<DataLayout />} />
            <Route path="player" element={<PlayerLayout />} />
        </Routes>
      </BrowserRouter>
    )
}
export default Nav;