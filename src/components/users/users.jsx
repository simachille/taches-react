import React, { useState, useEffect } from "react";
import { TASKS_URL } from "../../util/data";
import { Container, Table, Row, Col } from "react-bootstrap";

function Users() {
  const [list, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(TASKS_URL + "/5e370caad90c5abdfa8b39d2");
    const data = await response.json();
    setUsers(data.users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <section className="page d-flex align-items-center">
      <Container>
        <h1 className="text-white">Utilisateurs</h1>
        <Row className="align-items-center">
          <Col className="mx-auto">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <td>Email</td>
                  <td>Prénom</td>
                  <td>Nom</td>
                </tr>
              </thead>
              <tbody>
                {list.map(item => (
                  <tr key={item.id}>
                    <td>{item.email}</td>
                    <td className="text-capitalize">{item.firstName}</td>
                    <td className="text-uppercase">{item.lastName}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Users;
