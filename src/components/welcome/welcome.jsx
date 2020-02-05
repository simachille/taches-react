import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Jumbotron, Button, Row, Col } from "react-bootstrap";

const Welcome = () => {
  const history = useHistory();
  const redirectToTasks = () => {
    history.push("/taches");
  };

  return (
    <section className="page d-flex align-items-center">
      <Container>
        <Row>
          <Col md={6} xs={6} className="mx-auto">
            <Jumbotron className="text-center">
              <h1>Bienvenue</h1>
              <p>Application de gestion des tâches</p>
              <p>
                <Button
                  onClick={() => {
                    redirectToTasks();
                  }}
                  variant="outline-primary"
                >
                  Liste des taches
                </Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Welcome;
