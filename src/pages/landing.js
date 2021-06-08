import React, { Component } from "react";
import { Link } from "react-router-dom";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/landing.css";
import "../css/auth.css";
import "../css/navbar.css";
import "../css/glitch.css";
import "../css/postGroup.css";

//Components
import Carousel from "react-bootstrap/Carousel";
import Button from "@material-ui/core/Button";
import ExploreIcon from "@material-ui/icons/Explore";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Typography } from "@material-ui/core";

import Navbar from "../components/navbar";
import Login from "../components/login";
import SignUp from "../components/signUp";
import Glitch from "../components/glitch";
import PostGroup from "../components/postGroup";
import Up from "../components/up";

// Background Image
import bgImages from "../resources/images.js";
import NavDotContainer from "../components/navDotContainer";
let bgImg = bgImages[Math.floor(Math.random() * 2)];

export class landing extends Component {
  state = {
    index: this.props.slide,
    slide: 1,
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
    });
  };

  changeIndex = (slide) => {
    document.getElementById("slider").scrollIntoView({ behavior: "smooth" });
    this.toggleNavdot(1);
    this.lineErase();
    this.setState({
      index: slide,
    });
  };

  toggleNavdot = (slide) => {
    const pages = document.getElementsByClassName("vertical-navdot");
    for (let i = 0; i < pages.length; i++) {
      pages[i].classList.remove("vertical-navdot-active");
    }
    document
      .getElementById(`vertical-page-${slide}`)
      .classList.add("vertical-navdot-active");
  };

  lineMark = () => {
    document.getElementById("glitchBox").classList.remove("animate_r");
    document.getElementById("glitchBox").classList.add("animate_f");
  };

  lineErase = () => {
    document.getElementById("glitchBox").classList.remove("animate_f");
    document.getElementById("glitchBox").classList.add("animate_r");
  };

  isInViewport = (id) => {
    var bounding = document.getElementById(id).getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  keyNav = () => {
    let slides = ["slider", "slide-2", "slide-3", "slide-4"];
    setTimeout(() => {
      for (let i = 0; i < slides.length; i++) {
        if (this.isInViewport(slides[i])) {
          this.toggleNavdot(i + 1);
          if (i + 1 === 2) {
            setTimeout(this.lineMark, 100);
          } else if (i + 1 !== 2) {
            this.lineErase();
          }
          break;
        }
      }
    }, 500);
  };

  toggleHover = () => {
    document.getElementById("expandText").classList.toggle("textShow");
  };

  render() {
    return (
      <div style={{ height: "inherit" }}>
        <NavDotContainer keyNav={this.keyNav} />

        <Up changeIndex={this.changeIndex} />

        <Navbar changeIndex={this.changeIndex} />

        <div
          className="vertical-slider"
          style={{ overflow: "auto", height: "inherit" }}
          onWheel={() => {
            setTimeout(this.keyNav, 400);
          }}
          onScroll={() => {
            setTimeout(this.keyNav, 400);
          }}
          onKeyDownCapture={this.keyNav}
          tabIndex="0"
        >
          <section
            id="slider"
            className="vertical-slide"
            style={{
              position: "relative",
              height: "inherit",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundImage: `url(${process.env.PUBLIC_URL + bgImg})`,
            }}
          >
            <Carousel
              style={{ height: "inherit" }}
              activeIndex={this.state.index}
              onSelect={this.handleSelect}
              interval={100000000000000}
              indicators={false}
            >
              <Carousel.Item>
                <div className="carousel-container-div landing">
                  <div className="landing-container">
                    <div className="landing-auth-button">
                      <Button
                        onClick={() => {
                          this.setState({
                            index: 1,
                          });
                        }}
                      >
                        Get Started
                      </Button>
                      <Button
                        onClick={() => {
                          this.setState({
                            index: 2,
                          });
                        }}
                        className="login-button"
                      >
                        Log In
                      </Button>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        marginTop: "12px",
                        justifyContent: "center",
                        display: "inline-flex",
                      }}
                    >
                      <Link
                        to="#"
                        style={{
                          color: "rgba(255,255,255,0.95)",
                          display: "inline-flex",
                          textDecoration: "none",
                        }}
                      >
                        <ExploreIcon style={{ marginRight: "8px" }} />
                        <Typography>What's new ?</Typography>
                      </Link>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-container-div auth">
                  <SignUp />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-container-div">
                  <Login />
                </div>
              </Carousel.Item>
            </Carousel>
            <div className="expand">
              <div id="expandText" className="textShow">
                <Typography>What's this about ?</Typography>
              </div>
              <ArrowForwardIosIcon
                onClick={() => {
                  document
                    .getElementById("slide-2")
                    .scrollIntoView({ behavior: "smooth" });
                  this.keyNav();
                }}
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}
              />
            </div>
          </section>

          <section
            id="slide-2"
            className="vertical-slide"
            style={{
              position: "relative",
              height: "inherit",
              backgroundColor: "blueviolet",
            }}
          >
            <div id="glitchBox" className="animate_r">
              <div className="glitch_text">
                <Typography>
                  Glitch is so easy to use that it’s hard to explain. We made it
                  really, really simple for people to make a blog and put
                  whatever they want on it. Stories, photos, GIFs, TV shows,
                  links, quips, dumb jokes, smart jokes, Spotify tracks, mp3s,
                  videos, fashion, art, deep stuff. Glitch is 525 million
                  different blogs, filled with literally whatever.
                </Typography>
              </div>
              <Glitch />
            </div>
            <div className="expand">
              <ArrowForwardIosIcon
                style={{ opacity: "0.6" }}
                onClick={() => {
                  document
                    .getElementById("slide-3")
                    .scrollIntoView({ behavior: "smooth" });
                  this.keyNav();
                }}
              />
            </div>
          </section>

          <section
            id="slide-3"
            className="vertical-slide"
            style={{
              position: "relative",
              height: "inherit",
              backgroundColor: "purple",
            }}
          >
            <div style={{ display: "flex" }}>
              <PostGroup />
              <div>
                <div id="post_text">
                  <Typography>
                    <span style={{ fontSize: "2em" }}>Glitch is blogs.</span>{" "}
                    Turns out that when you make it easy to create interesting
                    things, that’s exactly what people do. All those great,
                    random blogs your friends send you, those are Glitch blogs.
                    We’ll help you find and follow blogs like that, and we’ll
                    help other people find and follow yours.
                  </Typography>
                </div>
                <img
                  id="secThreeText"
                  src={process.env.PUBLIC_URL + "./resources/groupPost.png"}
                  alt="groupPost"
                />
              </div>
            </div>
            <div className="expand">
              <ArrowForwardIosIcon
                style={{ opacity: "0.6" }}
                onClick={() => {
                  document
                    .getElementById("slide-4")
                    .scrollIntoView({ behavior: "smooth" });
                  this.keyNav();
                }}
              />
            </div>
          </section>

          <section
            id="slide-4"
            className="vertical-slide"
            style={{
              position: "relative",
              height: "inherit",
              backgroundColor: "orange",
            }}
          >
            <div className="secFour">
              <div
                className="backdrop"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/resources/bgPatch.png)`,
                }}
              ></div>
              <div style={{ zIndex: "2", textShadow: "2px 2px 5px black" }}>
                <div>
                  <Typography class="bigText">
                    Okay, it’s not actually hard to explain.
                  </Typography>
                </div>
                <div>
                  <Typography class="smallText">
                    We lied. But now you understand this thing. So come on in.
                  </Typography>
                </div>
              </div>
              <div>
                <Button
                  onClick={() => {
                    this.changeIndex(0);
                  }}
                >
                  Let's do this!
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default landing;
