import { Field, Form, Formik } from "formik";
import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { addItem } from "../redux/action/action";

function FormData() {
 
  const dispatch=useDispatch()
  const formData = {
    username: "",
    email: "",
    password: "",
    mobilenumber: "",
  };
  //formsubmit


  const formSubmit = (val) => {
    console.log(val);
    dispatch(addItem(val))
  };

  return (
    <div className="cards d-flex justify-content-center mt-5">
      <Card style={{ width: "23rem" }}>
        <Card.Body>
          <Card.Title className="text-center">FORM DATA</Card.Title>
          <Formik initialValues={formData} onSubmit={formSubmit}>
            <Form>
              <div>
                <label>Username :</label>
                <Field
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  className="form-control"
                />
              </div>
              <div>
                <label>Email :</label>
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  className="form-control"
                />
              </div>
              <div>
                <label>Password :</label>

                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="form-control"
                />
              </div>
              <div>
                <label>MobileNumber :</label>

                <Field
                  type="number"
                  name="mobilenumber"
                  placeholder="Enter mobile"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                submit
              </button>
            </Form>
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FormData;
