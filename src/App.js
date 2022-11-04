import "./App.css";
import React from "react";
import DataLayout from "./project/DataLayout";
import Learning from "./learning/Learning";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/js/bootstrap.min.js";
function App() {
  return (
    <div className="ui-app-layout">
      <DataLayout></DataLayout>
      {/* <Learning></Learning> */}
    </div>
  );
}
export default App;
