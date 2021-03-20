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
        "https://images.vexels.com/media/users/3/200078/isolated/preview/b60850f12f828c75062f950afe57c6ac-red-motorcycle-isometric-by-vexels.png",
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
    <div className="bg-image">
      {/* <div className="container-fluid"> */}
        <Container>
          <Row>
            {riders.map((rider) => (
              <Riders rider={rider}></Riders>
            ))}
            </Row>
          </Container>
        
      {/* </div> */}
    </div>
  );
};

export default Home;
