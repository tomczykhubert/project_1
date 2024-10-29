import { Button, Container, Form, FormControl } from "react-bootstrap";
import { useState } from "react";

const eyesColorField = "eyesColor";
const nameField = "name";
const dateOfBirthField = "date";

function AddPersonForm() {
  const [errors, setErrors] = useState([]);
  const [isSendig, setSending] = useState(false);

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (new Date(data.get(dateOfBirthField)) > new Date()){
      setErrors([...errors, "Date cannot be  in future "])
      return;
    }
    setSending(true);                                           
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSending(false);
    for(let key of data.keys()){
        e.target[key].value = "";
    }
  };

  return (
    <div className="">
      <h2>Dodaj osobę</h2>
      <div className="text-danger">
        {errors.map((e, i) => <p key={i}>{e}</p>)}
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
          />
        
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor={eyesColorField}>Password</Form.Label>
          <FormControl
            id={eyesColorField}
            type={eyesColorField}
            name={eyesColorField}
            placeholder="Enter eyes color"
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
        
        <div className="d-grid">
          <Button disabled={isSendig}  type="submit" variant="outline-primary" size="lg">
            Add person
          </Button>
        </div> 
      </Form>
  </div>
  )
}

export default AddPersonForm;
