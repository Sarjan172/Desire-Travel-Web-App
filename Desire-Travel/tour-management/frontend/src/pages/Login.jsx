import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);

      console.log(result.data);

      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img d-flex">
                <img src={loginImg} alt="" />

                <div className="login__form d-flex justify-content-center">
                  <div div className="user text-center mt-5">
                    <img src={userIcon} alt="" className="mt-5" />
                    <h2>Login</h2>

                    <Form onSubmit={handleClick}>
                      <FormGroup>
                        <input
                          type="email"
                          className="align-items-center"
                          placeholder="Email"
                          required
                          id="email"
                          style={{
                            width: "300px",
                            transform: "translateX(-100px)",
                          }}
                          onChange={handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <input
                          type="password"
                          placeholder="Password"
                          required
                          id="password"
                          style={{
                            width: "300px",
                            transform: "translateX(-100px)",
                          }}
                          onChange={handleChange}
                        />
                      </FormGroup>
                      <Button
                        className="btn secondary__btn auth__btn"
                        type="submit"
                        style={{
                          width: "100px",
                          transform: "translateX(-100px)",
                        }}
                      >
                        Login
                      </Button>
                    </Form>
                    <p>
                      Don't have an account?{" "}
                      <Link to="/register">Register</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
