import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All fields are required!");
    }
    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();

    navigate(
      `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
  };

  return (
    <Col lg="12">
      <div className="container">
        <div className=" row search__bar">
          <div className="col-12">
            <Form className="row gap-4">
              <div className="col-12">
                <div className="row">
                  <div className="d-flex col-12">
                    <div className="col-3 d-flex align-items-center">
                      <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                          <i class="ri-map-pin-line"></i>
                        </span>
                        <div>
                          <h6>Location</h6>
                          <input
                            className="w-100"
                            type="text"
                            placeholder="Where are you going?"
                            ref={locationRef}
                          />
                        </div>
                      </FormGroup>
                    </div>
                    <div className="col-3 ms-5 d-flex align-items-center">
                      <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                          <i class="ri-map-pin-time-line"></i>
                        </span>
                        <div>
                          <h6>Distance</h6>
                          <input
                            className="w-100"
                            type="number"
                            placeholder="Distance k/m"
                            ref={distanceRef}
                          />
                        </div>
                      </FormGroup>
                    </div>
                    <div className="col-3 ms-5 d-flex align-items-center">
                      <FormGroup className="d-flex gap-3 form__group form__group-last">
                        <span>
                          <i class="ri-group-line"></i>
                        </span>
                        <div>
                          <h6>Max People</h6>
                          <input
                            type="number"
                            placeholder="0"
                            ref={maxGroupSizeRef}
                          />
                        </div>
                      </FormGroup>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                      <span
                        className="search__icon"
                        type="submit"
                        onClick={searchHandler}
                      >
                        <i class="ri-search-line"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SearchBar;
