import React, { useContext } from "react";

import { DispatchContext } from "../../context/appContext";
import { useInputState } from "../../hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import "./SearchContainerStyles.css";

export default function SearchContainer() {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);
  return (
    <div className="SearchContainer">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "SetCity", payload: value });
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Search City Weather"
          fullWidth
        />
      </form>
    </div>
  );
}
