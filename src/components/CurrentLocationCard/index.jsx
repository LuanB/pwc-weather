import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import "./CurrentLocationCardStyles.css";

export default function CurrentLocationCard() {
  // check for lat or long in context and then get current weather

  const appContext = useContext(AppContext);
  console.log(appContext);

  return <div>Current Location Weather Card component</div>;
}
