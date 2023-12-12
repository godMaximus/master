
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

// index sections
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import { Button, Card, CardBody, CardFooter, CardTitle, Col, Container, Row } from "reactstrap";
import BookingModal from "components/Modals/BookingModal";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  const [opnedModal, setOpnedModal] = React.useState(false);
  const [bookingType, setBookingType] = React.useState('session');
  return (
    <>
      <IndexNavbar opneModal={() => {setOpnedModal(true);setBookingType('real time session')}}/>
      <IndexHeader />
      <div className="main">
      <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">about me</h2>
                <h5 className="description">
                size 10 👟 pro alpha escort master with experience 
                
                </h5>
                <br />
              </Col>
            </Row>
            {/* <br />
            <br />
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => {e.preventDefault();setOpnedModal(true);setBookingType('real time session')}}>
                      <img
                        alt="..."
                        src={require("assets/img/edges/1.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => {e.preventDefault();setOpnedModal(true);setBookingType('virtual session')}}>
                      <div className="author">
                        <CardTitle tag="h4">Real Time</CardTitle>
                        <h6 className="card-category">Book a session</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    A unique opportunity to explore the power of master in person.

                    </p>
                  </CardBody>
                
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => {e.preventDefault();setOpnedModal(true);setBookingType('session')}}>
                      <img
                        alt="..."
                        src={require("assets/img/edges/2.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => {e.preventDefault();setOpnedModal(true);setBookingType('session')}}>
                      <div className="author">
                        <CardTitle tag="h4">Vertiual sessions</CardTitle>
                        <h6 className="card-category">Book a session</h6>
                      </div>
                    </a>
                    
                    <p className="card-description text-center">
                    Despite the physical distance, you can still experiance the power of master Edges
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">

                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => {e.preventDefault();setOpnedModal(true);setBookingType('video')}}>
                      <img
                        alt="..."
                        src={require("assets/img/edges/3.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => {e.preventDefault();setOpnedModal(true)}}>
                      <div className="author">
                        <CardTitle tag="h4"> Custom Videos</CardTitle>
                        <h6 className="card-category">Book a video</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    request custom videos tailored to your specific desires
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => {e.preventDefault();setOpnedModal(true)}}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => {e.preventDefault();setOpnedModal(true)}}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => {e.preventDefault();setOpnedModal(true)}}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row> */}
          </Container>
          <BookingModal opnedModal= {opnedModal} setOpnedModal= {setOpnedModal} bookingType= {bookingType}/>
        </div>
        <SectionCarousel />
      </div> 
    </>
  );
}

export default Index;
