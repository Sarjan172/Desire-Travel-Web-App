import React, { useRef, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./header.css";
import { AuthContext } from "../../context/AuthContext";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/createtour",
    display: "CreateTour",
  },
  {
    path: "/alltour",
    display: "AllTour",
  },
  {
    path: "/allbooking",
    display: "AllBooking",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate;
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    //navigate("/");
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <Col>
            <div className="navbar d-flex">
              {/*------------logo---------------*/}
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              {/*------------logo---------------*/}

              {/*------------menu start---------------*/}
              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <ul className="menu d-flex justify-content-end gap-5">
                  {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "active__link" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              {/*------------menu end---------------*/}
              <div className="nav__right d-flex align-items-center gap-4">
                <div className="nav__btns d-flex align-items-center gap-3">
                  {user ? (
                    <>
                      {/* <NavLink to="/"> */}
                      <h5 className="mb-0">{user.username}</h5>
                      <Button className="btn btn-dark" onClick={logout}>
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <NavLink to="/login">
                        <Button
                          className="loginBtn"
                          style={{
                            borderRadius: "30px",
                            border: "none",
                            backgroundColor: "white",
                            height: "60px",
                            width: "100px",
                          }}
                        >
                          <h6 className="text" style={{ color: "black" }}>
                            Login
                          </h6>
                        </Button>
                      </NavLink>

                      <NavLink to="/register">
                        <Button
                          className="registerBtn"
                          style={{
                            width: "100px",
                            height: "60px",
                            border: "none",
                            borderRadius: "30px",
                            backgroundColor: "orange",
                          }}
                        >
                          Register
                        </Button>
                      </NavLink>
                    </>
                  )}
                </div>

                <span className="mobile__menu" onClick={toggleMenu}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
