import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtersContact } from "../redux/filterSlice.js";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  return (
    <div>
      <p>Find contact by name</p>
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(filtersContact(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
