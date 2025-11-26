import React from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Button from "@material-ui/core/Button";
const Up = ({ changeIndex }) => (
  <Button id="up">
    <KeyboardArrowUpIcon
      onClick={() => {
        changeIndex(0);
      }}
    />
  </Button>
);

export default Up;
