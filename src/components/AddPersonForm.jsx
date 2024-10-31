import { Button, Container, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import { useContext } from "react";
import AppContext from "../data/AppContext";
import BackButton from "./BackButton";

const eyesColorField = "eyesColor";
const nameField = "name";
const dateOfBirthField = "date";

function AddPersonForm() {
  const context = useContext(AppContext);
  const dispatch = context.dispatch;
  const [error, setError] = useState("");
  const [isSendig, setSending] = useState(false);
  const [success, setSuccess] = useState("");

  const onSubmitFunction = async (e) => {
    setSuccess("");
    setError("");
    e.preventDefault();
    const data = new FormData(e.target);
    if (new Date(data.get(dateOfBirthField)) > new Date()) {
      setError("Date cannot be in the future ");
      return;
    }

    const newId = context.nextId + 1;

    const item = {
      id: newId,
      name: data.get(nameField),
      dateOfBirth: data.get(dateOfBirthField),
      eyesColor: data.get(eyesColorField),
      rating: 0,
    };

    dispatch({
      type: "add",
      item: item,
    });
    context.nextId = newId;
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); //symulacja wysyłania
    setSending(false);
    for (let key of data.keys()) {
      e.target[key].value = "";
    }
    setSuccess("Successfully added " + data.get(nameField));
  };

  return (
    <>
      <div className="w-50 mx-auto mt-5 card">
        <h2>Add a person</h2>
        <div className="text-danger">
          <p>{error}</p>
        </div>
        <div className="text-success">
          <p>{success}</p>
        </div>
        <Form className="text-primary" onSubmit={onSubmitFunction}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor={nameField}>Name</Form.Label>
            <FormControl
              required
              id={nameField}
              type={nameField}
              name={nameField}
              className="text-lg"
              placeholder="Enter name"
              minLength={2}
              maxLength={30}
              pattern="^[A-Za-z\s]+$"
              title="Only letters and spaces are allowed"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor={eyesColorField}>Eyes color</Form.Label>
            <FormControl
              id={eyesColorField}
              type={eyesColorField}
              name={eyesColorField}
              placeholder="Enter eyes color"
              minLength={3}
              maxLength={20}
              pattern="^[A-Za-z\s]+$"
              title="Only letters and spaces are allowed"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor={dateOfBirthField}>Date of birth</Form.Label>
            <FormControl
              required
              id={dateOfBirthField}
              type={dateOfBirthField}
              name={dateOfBirthField}
            />
          </Form.Group>

          <div className="row justify-content-between">
            <Button
              className="col-5"
              disabled={isSendig}
              type="submit"
              variant="outline-primary"
              size="lg"
            >
              Add
            </Button>
            <BackButton
              className="btn btn-lg btn-outline-danger col-5"
              variant="outline-primary"
              size="lg"
            />
          </div>
        </Form>
      </div>
    </>
  );
}

export default AddPersonForm;
