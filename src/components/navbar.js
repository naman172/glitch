import React, { Component } from "react";

//Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";
import ExploreIcon from "@material-ui/icons/Explore";
import ToolTip from "@material-ui/core/Tooltip";

class navbar extends Component {
  render() {
    return (
      <div className="nav">
        <AppBar className="nav-transparent" position="fixed">
          <Toolbar>
            <div className="nav-container">
              <div
                onClick={() => {
                  this.props.changeIndex(0);
                }}
                style={{
                  fontFamily: "honeyScript",
                  fontSize: "3em",
                  padding: "6px 8px",
                  cursor: "pointer",
                  lineHeight: "36px",
                  transform: "rotateZ(-10deg)",
                }}
              >
                glitch
              </div>
              <div>
                <ToolTip title="Explore">
                  <Button>
                    <ExploreIcon />
                  </Button>
                </ToolTip>
                <Button
                  onClick={() => {
                    this.props.changeIndex(2);
                  }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    this.props.changeIndex(1);
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default navbar;
