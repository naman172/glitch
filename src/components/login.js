import React, { Component } from "react";

//Components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

export class login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // let userData = {
    //   email: this.state.email,
    //   password: this.state.password,
    // };
  };

  render() {
    let errors = {};
    let loading = false;
    return (
      <div
        className="auth-form-container"
        onMouseEnter={(e) => {
          document
            .getElementsByClassName("carousel-container-div")[2]
            .classList.add("authEnter");
          document
            .getElementsByClassName("carousel-container-div")[2]
            .classList.remove("authLeave");
        }}
        onMouseLeave={(e) => {
          document
            .getElementsByClassName("carousel-container-div")[2]
            .classList.remove("authEnter");
          document
            .getElementsByClassName("carousel-container-div")[2]
            .classList.add("authLeave");
        }}
      >
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <TextField
            name="email"
            type="email"
            label="Email"
            className="textFeild"
            value={this.state.email}
            helperText={errors.email}
            error={errors.email ? true : false}
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
          ></TextField>
          <TextField
            style={{ marginTop: "8px" }}
            name="password"
            type="password"
            label="Password"
            className="textFeild"
            value={this.state.password}
            helperText={errors.password}
            error={errors.password ? true : false}
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
          ></TextField>
          {errors.general ? (
            <div className="invalid-credentials">{errors.general}</div>
          ) : (
            ""
          )}
          <Button type="submit" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Log In"}
          </Button>
        </form>
      </div>
    );
  }
}

export default login;
