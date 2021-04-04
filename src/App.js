import React from "react";
import  BabyNameIndex from "./BabyNameIndex";
import SearchInfo from "./SearchInfo";

function App() {
  console.log (BabyNameIndex)
  return (
    <div className="App">
      <div>
       
        <SearchInfo BabyNameIndex={BabyNameIndex} />
        
      </div>
    </div>
  );
}
export default App;
