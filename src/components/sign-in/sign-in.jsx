import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./sign-in.css";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

const SignIn = ({ history }) => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = data => {};

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <section className="page d-flex mt-4 pt-4 align-items-top">
      <Container>
        <Row>
          <Col xs={12} md={6} className="mx-auto">
            <h2 className="page-title mb-2 mt-4 pt-4">
              Connectez vous
              <span className="ml-2 font-weight-900"></span>
            </h2>
            <div className="mt-4">
              <form
                action=""
                className="text-white"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-group form-group-lg mt-4">
                  <label htmlFor="title">Email</label>

                  <input
                    name="title"
                    type="email"
                    className="form-control form-control-lg"
                    id="title"
                    placeholder="Votre email"
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
                  <label htmlFor="title">Password</label>

                  <input
                    name="title"
                    type="password"
                    className="form-control form-control-lg"
                    id="title"
                    placeholder="Votre mot de passe"
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
                  <button
                    type="submit"
                    className="btn btn-outline-warning btn-lg btn-block"
                  >
                    Connexion
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

export default SignIn;
