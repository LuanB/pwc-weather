import React, { useContext } from "react";
import Switch from "react-switch";

import { DispatchContext, AppContext } from "../../context/appContext";
import { useInputState } from "../../hooks/useInputState";
import { useToggle } from "../../hooks/useToggleState";
import TextField from "@material-ui/core/TextField";
import "./SearchContainerStyles.css";

export default function SearchContainer() {
  const [value, handleChange, reset] = useInputState("");

  const dispatch = useContext(DispatchContext);
  const appContext = useContext(AppContext);

  const [state, toggle] = useToggle(appContext.metric);

  const handleSwitchChange = () => {
    toggle();
    dispatch({ type: "SetMetric", payload: state });
  };

  return (
    <div className="SearchContainer">
      <div className="form">
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
            label="Search City: ONLY AUSTRALIAN CITIES-Perth, Sydney, Melbourne, etc"
            fullWidth
          />
        </form>
      </div>

      <div className="toggle">
        <label>
          <span>Metric / Imperial</span>
          <Switch onChange={handleSwitchChange} checked={state} />
        </label>
      </div>
    </div>
  );
}
