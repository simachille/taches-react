import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const TaskEdit = ({ match }) => {
  const [item, setItem] = useState(null);
  const read = async () => {
    //const response = await fetch("TASKS_URL");
    //const data = await response.json();
    const id = match.params.id;
    setItem(id);
  };

  useEffect(() => {
    read();
  });
  return (
    <section className="page d-flex mt-4 align-items-top">
      <Container>
        <Row>
          <Col xs={12} md={6} className="mx-auto">
            <h2 className="text-white mb-2">Mis à jour de la tâche {item}</h2>
            {item}
            <div>
              <form action=""></form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TaskEdit;
