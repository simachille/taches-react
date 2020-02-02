import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Jumbotron, Button, Row, Col } from "react-bootstrap";

const NoMath = () => {
  const history = useHistory();
  const redirectToHome = () => {
    history.push("/");
  };
  return (
    <section className="page d-flex align-items-center">
      <Container>
        <Row>
          <Col md={6} xs={6} className="mx-auto">
            <Jumbotron className="text-center">
              <h1>Page inconnue</h1>
              <p>
                <Button
                  onClick={() => {
                    redirectToHome();
                  }}
                  variant="outline-primary"
                >
                  Accueil
                </Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NoMath;
