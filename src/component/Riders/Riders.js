import React from "react";
import { Card, CardDeck, Col,Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Riders = (props) => {
  const { title, imgUrl } = props.rider;
  const history = useHistory()
  const handleLocation = (title) => {
    history.push(`/location/${title}`);
}
  return (
    <>
      <Col lg={3} md={2} sm={8} style={{marginTop: '10%',width:'25rem'}}>
            <Card bg='light' style={{borderRadius:'10px',border:'1px solid black'}}>
                <Card.Img variant="top" src={imgUrl} style={{width:'auto'}}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button variant="primary" onClick={() => handleLocation(title)}>Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
        
    </>
  );
};

export default Riders;
