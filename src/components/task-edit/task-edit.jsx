import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./task-edit.css";
import { TASKS_URL } from "../../util/data";
import { useForm } from "react-hook-form";
const TaskEdit = ({ match }) => {
  const [item, setItem] = useState({});

  const { register, handleSubmit, errors } = useForm();

  const read = async () => {
    const id = match.params.id;
    const response = await fetch(TASKS_URL + "/" + id);
    const data = await response.json();
    setItem(data);
  };

  const onSubmit = data => {
    console.log(data);
  };
  useEffect(() => {
    read();
  }, []);

  return (
    <section className="page d-flex mt-4 align-items-top">
      <Container>
        <Row>
          <Col xs={12} md={6} className="mx-auto">
            <h4 className="page-title mb-2">
              Mis à jour de la tâche
              <span className="ml-2 font-weight-900">{item.title}</span>
            </h4>
            <div>
              <form
                action=""
                className="text-white"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-group form-group-lg">
                  <label htmlFor="title">Titre</label>

                  <input
                    name="title"
                    type="text"
                    className="form-control form-control-lg"
                    id="title"
                    placeholder="Titre de l'annonce"
                    ref={register({
                      required: "Ce champ est requis",
                      minLength: { value: 6, message: "trop Court" }
                    })}
                  />

                  {errors.title && (
                    <p className="text-danger">{errors.title.message}</p>
                  )}
                </div>
                <div className="form-group form-group-lg">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    className="form-control form-control-lg"
                    id="description"
                    rows="3"
                    ref={register({ required: true })}
                  ></textarea>
                </div>
                <div className="form-group form-group-lg">
                  <label htmlFor="description">Statut</label>
                  <select
                    name="status"
                    id="status"
                    className="form-control form-control-lg"
                    ref={register({ required: true })}
                  >
                    <option>Sélectionner un statut</option>
                    <option value="1">TO DO</option>
                    <option value="2">WIP</option>
                    <option value="3">TEST</option>
                    <option value="4">DONE</option>
                  </select>
                </div>
                <div className="form-group form-group-lg">
                  <label htmlFor="tr">Temps Restant</label>
                  <input
                    name="tr"
                    type="number"
                    className="form-control form-control-lg"
                    id="tr"
                    placeholder="Temps restant"
                    ref={register({ required: true })}
                  />
                </div>
                <div className="form-group form-group-lg">
                  <button
                    type="submit"
                    className="btn btn-outline-warning btn-lg btn-block"
                  >
                    Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TaskEdit;
