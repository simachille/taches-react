import React, { useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./sign-in.css";
import { useFormik } from "formik";

const SignIn = ({ history }) => {
  
  const validate = values => {
    const errors = {};
    if (!values.password) {
      errors.password = "Le mot de passe est requis";
    }

    if (!values.email) {
      errors.email = "Le mail est requis";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Le mail est invalide";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate,
    onSubmit: values => {
      submit(values);
    }
  });

  const submit = useCallback(
    values => {
      localStorage.setItem("AUTH_KEY", JSON.stringify(values, null, 2));
      history.push("/");
    },
    [history]
  );

  return (
    <section className="d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mx-auto">
            <h2 className="page-title">
              Connectez vous
              <span className="ml-2 font-weight-900"></span>
            </h2>
            <div className="mt-4">
              <form onSubmit={formik.handleSubmit} className="text-white">
                <div className="form-group form-group-lg mt-4">
                  <label htmlFor="title text-white">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="Votre email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-danger">{formik.errors.email}</p>
                  ) : null}
                </div>
                <div className="form-group form-group-lg">
                  <label htmlFor="title text-white">Mot de passe</label>

                  <input
                    name="password"
                    type="password"
                    className="form-control form-control-lg"
                    id="password"
                    placeholder="Votre mot de passe"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <p className="text-danger">{formik.errors.password}</p>
                  ) : null}
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
