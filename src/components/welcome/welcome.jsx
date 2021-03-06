import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Jumbotron, Button, Row, Col } from "react-bootstrap";
// 6- Accéder aux données du store
import { useSelector, useDispatch } from "react-redux";

// 7- import actions
import { setWIP, setTODO, updateStatus } from "../../actions";
const Welcome = () => {
  // 6"- lecture d'une donnée
  const status = useSelector(state => state.taskReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  const redirectToTasks = () => {
    history.push("/taches");
  };
  const getStatus = () => {
    const items = ["TODO", "WIP", "TEST", "DONE"];
    return items[Math.floor(Math.random() * items.length)];
  };
  // 7- Action: Quand un evènement(click) arrive il faut dispatcher l'action vers le reducer
  return (
    <section className="page d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={6} xs={12} className="mx-auto">
            <Jumbotron className="text-center">
              <h2 className="title"> {status}</h2>

              <button onClick={() => dispatch(updateStatus(getStatus()))}>
                status
              </button>

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
