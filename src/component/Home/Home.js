import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { UserContext } from "../../App";
import Riders from "../Riders/Riders";
import "./Home.css";

const Home = () => {
  const riders = [
    {
      title: "BIKE",
      imgUrl:
        "https://img.freepik.com/free-vector/man-ride-naked-bike-cartoon-speed-motorcycle-illustration_261104-19.jpg?size=664&ext=jpg",
    },
    {
      title: "CAR",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqPD82u0K2yN3XhbSmaB3_saHyVxXkwpgew&usqp=CAU",
    },
    {
      title: "BUS",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBn2_APqcLIZ0dEBD_6Rvk3H5NEUEC0cYTVw&usqp=CAU",
    },
    {
      title: "TRAIN",
      imgUrl:
        "https://thumbs.dreamstime.com/b/super-streamlined-high-speed-train-isolated-white-background-concept-railway-tourism-transportation-railroad-travel-vector-96912472.jpg",
    },
  ];
  
  return (
    <div>
        <Container className="container-fluid" >
          <Row>
            {riders.map((rider) => (
              <Riders rider={rider}></Riders>
            ))}
            </Row>
          </Container>
    </div>
  );
};

export default Home;
