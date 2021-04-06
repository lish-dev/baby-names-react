import React from "react";
const Favourites = (props) => {
  const functionClick = (e) => {};
  return (
    <div className="favourite">
      <h3 onClick={functionClick}>
        Click on a name to add Favourites ...
        <ul className="container">
          {props.names.map((name) => (
            <li key={name.id} onClick={(e) => props.remove(e, name.id)}>
              {name.name}
            </li>
          ))}
        </ul>
      </h3>
    </div>
  );
};
export default Favourites;
