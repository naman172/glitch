import React, { Component } from "react";

//Components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

export class signUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // let newUserData = {
    //   username: this.state.username,
    //   email: this.state.email,
    //   password: this.state.password,
    //   confirmPassword: this.state.confirmPassword,
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
            .getElementsByClassName("carousel-container-div")[1]
            .classList.add("authEnter");
          document
            .getElementsByClassName("carousel-container-div")[1]
            .classList.remove("authLeave");
        }}
        onMouseLeave={(e) => {
          document
            .getElementsByClassName("carousel-container-div")[1]
            .classList.remove("authEnter");
          document
            .getElementsByClassName("carousel-container-div")[1]
            .classList.add("authLeave");
        }}
      >
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="textField">
            <TextField
              name="username"
              type="text"
              label="Username"
              value={this.state.username}
              helperText={errors.username}
              error={errors.username ? true : false}
              onChange={this.handleChange}
              variant="outlined"
              fullWidth
            ></TextField>
          </div>
          <div className="textField">
            <TextField
              name="email"
              type="email"
              label="Email"
              value={this.state.email}
              helperText={errors.email}
              error={errors.email ? true : false}
              onChange={this.handleChange}
              variant="outlined"
              fullWidth
            ></TextField>
          </div>
          <div className="textField">
            <TextField
              id="outlined-basic"
              name="password"
              type="password"
              label="Password"
              value={this.state.password}
              helperText={errors.password}
              error={errors.password ? true : false}
              onChange={this.handleChange}
              variant="outlined"
              fullWidth
            ></TextField>
          </div>
          <div className="textField">
            <TextField
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              value={this.state.confirmPassword}
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
              onChange={this.handleChange}
              variant="outlined"
              fullWidth
            ></TextField>
          </div>
          {errors.general ? (
            <div className="invalid-credentials">{errors.general}</div>
          ) : (
            ""
          )}
          <Button
            type="submit"
            disabled={loading}
            style={{ marginTop: "12px" }}
          >
            {loading ? <CircularProgress size={24} /> : "Sign Up"}
          </Button>
        </form>
      </div>
    );
  }
}

export default signUp;
