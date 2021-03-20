import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { UserContext } from "../../App";
import fakeData from "../../faleData/data.json";
import img from "../../images/Frame.png";
import "./Location.css";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const Location = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(fakeData)
      .then((fakeData) => setData(fakeData))
      .catch((error) => console.log(error));
  }, []);

  const [toggle, setToggle] = useState(true);
  const [finalSearch, setFinalSearch] = useState("");
  const [searchLocation, setSearchLocation] = useState({
    firstLocation: "",
    lastLocation: "",
  });

  const handleSearch = (e) => {
    setFinalSearch(searchLocation);
    setToggle(false);
    e.preventDefault();
  };

  const handleBlur = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setSearchLocation((preValue) => {
      if (name === "firstLocation") {
        return {
          firstLocation: value,
          lastLocation: preValue.lastLocation,
        };
      } else if (name === "lastLocation") {
        return {
          firstLocation: preValue.firstLocation,
          lastLocation: value,
        };
      }
    });
  };

  console.log(finalSearch.firstLocation);
  console.log(data);
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          {toggle ? (
            <Form className="form-bg" onSubmit={handleSearch}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Pic From</Form.Label>
                <Form.Control
                  type="text"
                  name="firstLocation"
                  onBlur={handleBlur}
                  placeholder="Location1" required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Pic To</Form.Label>
                <Form.Control
                  type="text"
                  name="lastLocation"
                  onBlur={handleBlur}
                  placeholder="Location2" required
                />
              </Form.Group>

              <input type="submit" value="submit" style={{backgroundColor:'orange',padding:'5px 20px',borderRadius:'10px'}}/>
            </Form>
          ) : (
            <div className="location-cart">
              <ul
                style={{
                  backgroundColor: "skyblue",
                  padding: "25px",
                  borderRadius: "10px",
                }}
              >
                <li>
                  <h3>{searchLocation.firstLocation}</h3>
                </li>
                <li>
                  <h3>{searchLocation.lastLocation}</h3>
                </li>
              </ul>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img style={{ width: "50px" }} src={img} alt="" />
                  </div>
                  <div className="col">
                    <h6>BIKE</h6>
                  </div>
                  <div className="col">
                    <h6>3</h6>
                  </div>
                  <div className="col">
                    <h6>$67</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <img style={{ width: "50px" }} src={img} alt="" />
                  </div>
                  <div className="col">
                    <h6>BIKE</h6>
                  </div>
                  <div className="col">
                    <h6>3</h6>
                  </div>
                  <div className="col">
                    <h6>$67</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <img style={{ width: "50px" }} src={img} alt="" />
                  </div>
                  <div className="col">
                    <h6>BIKE</h6>
                  </div>
                  <div className="col">
                    <h6>3</h6>
                  </div>
                  <div className="col">
                    <h6>$67</h6>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Col>
        <Col  xs={12} md={6} className={{marginTop: '10%'}}>
          {/* <img src={map} alt=""/> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14607.621087499343!2d90.44080485!3d23.7507572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1616238748051!5m2!1sen!2sbd"
            width="700"
            height="600"
            style={{ border: "0", allowfullscreen: "", loading: "lazy" }}
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Location;
