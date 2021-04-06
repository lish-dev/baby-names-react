import React, { useState } from "react";
import "./App.css";
import BabyNameIndex from "./BabyNameIndex";
import SearchInfo from "./SearchInfo.js";
import Favourites from "./Favourites.js";
function App() {
  const [favouriteArray, setFavouriteArray] = useState([]);
  const [babyNames, setBabyNames] = useState(BabyNameIndex);
  const [gender, setGender] = useState("mf");
  const functionClick = (e, id) => {
    const babyNamesCopy = [...babyNames];
    const index = babyNamesCopy.findIndex((babyName) => babyName.id === id);
    const element = babyNamesCopy.splice(index, 1);
    const newFavourites = [...favouriteArray, ...element];
    setFavouriteArray(newFavourites);
    setBabyNames(babyNamesCopy);
  };
  const removeFunctionClick = (e, id) => {
    const babyNamesCopyToo = [...babyNames];
    const indexToo = babyNamesCopyToo.findIndex(
      (babyName) => babyName.id === id
    );
    const elementToo = babyNamesCopyToo.splice(indexToo, 0);
    const removeNewFavourites = [...favouriteArray, ...elementToo];
    setFavouriteArray(removeNewFavourites);
    setBabyNames(babyNamesCopyToo);
  };
  return (
    <div className="App">
      <h1>Search Names </h1>
      <Favourites names={favouriteArray} remove={removeFunctionClick} />
      <div>
        <SearchInfo
          gender={gender}
          setGender={setGender}
          BabyNameIndex={babyNames}
          favouriteFunction={functionClick}
        />
      </div>
    </div>
  );
}
export default App;