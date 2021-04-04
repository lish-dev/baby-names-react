import React from "react";

import "./App.css";
import  BabyNameIndex from "./BabyNameIndex";
import SearchInfo from "./SearchInfo";

function App() {
  return (
    <div className="App">
      <div>
        <searchInfo />
        <SearchInfo BabyNameIndex={BabyNameIndex} />
      </div>
    </div>
  );
}
export default App;
