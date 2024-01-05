import React from "react";
import MainPage from "./MainPage";
import UpdataForm from "./UpdataForm";
import AddData from "./AddData";
import NavLayout from '../NavLayout'
function DataLayout() {
  return (
    <div className="ui-data-layout">
      <NavLayout />
      <MainPage></MainPage>
      <UpdataForm></UpdataForm>
      <AddData></AddData>
    </div>
  );
}
export default DataLayout;
