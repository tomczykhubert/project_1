import { useForm } from "react-hook-form";
import { Button, Form, FormControl } from "react-bootstrap";
import BackButton from "./BackButton";
import useDispatch from "../data/functions/useDispatch";
import useData from "../data/functions/useData";
import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
function EditPersonForm() {
  const data = useData();
  const dispatch = useDispatch();
  const { id } = useParams();
  const person = data.find((item) => item.id == id);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm(
    person
      ? {
          defaultValues: {
            id: person.id,
            name: person.name,
            eyesColor: person.eyesColor,
            dateOfBirth: person.dateOfBirth,
            rating: person.rating,
          },
        }
      : {}
  );

  const onSubmit = (data) => {
    const item = {
      id: data.id,
      name: data.name,
      eyesColor: data.eyesColor,
      dateOfBirth: data.dateOfBirth,
      rating: data.rating,
    };
    dispatch({
      type: "edit",
      item: item,
    });
  };
  if (person == null) {
    return <NotFound />;
  }
  return (
    <>
      <div className="w-50 mx-auto mt-5 card">
        <h2>Edit a person</h2>
        {isSubmitSuccessful && (
          <div className="success">Form submitted successfully!</div>
        )}

        <Form className="text-primary" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register("id")}></input>
          <input type="hidden" {...register("rating")}></input>
          <Form.Group className="mb-3">
            <p className="text-danger">{errors?.name?.message}</p>
            <Form.Label>Name</Form.Label>
            <FormControl
              type="text"
              {...register("name", {
                required: { value: true, message: "Name is required" },
                maxLength: {
                  value: 30,
                  message: "Name to long, max 30 characters allowed!",
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Name must contain only letters!",
                },
                minLength: {
                  value: 2,
                  message: "Name to short, min 2 characters allowed!",
                },
              })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <p className="text-danger">{errors?.eyesColor?.message}</p>
            <Form.Label>Eyes color</Form.Label>
            <FormControl
              type="text"
              {...register("eyesColor", {
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Eyes color must contain only letters!",
                },
                maxLength: {
                  value: 20,
                  message: "Eyes color to long, max 20 characters allowed!",
                },
                minLength: {
                  value: 3,
                  message: "Eyes color to short, min 3 characters allowed!",
                },
              })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <p className="text-danger">{errors?.dateOfBirth?.message}</p>
            <Form.Label>Date of birth</Form.Label>
            <FormControl
              type="date"
              {...register("dateOfBirth", {
                required: { value: true, message: "Date of birth is required" },
                validate: {
                  notFutureDate: (value) => {
                    const selectedDate = new Date(value);
                    const today = new Date();
                    return (
                      selectedDate <= today ||
                      "The date cannot be in the future"
                    );
                  },
                },
              })}
            />
          </Form.Group>

          <div className="row justify-content-between">
            <Button
              className="col-5"
              type="submit"
              variant="outline-primary"
              size="lg"
              disabled={isSubmitting}
            >
              Save
            </Button>
            <BackButton
              className="btn btn-lg btn-outline-danger col-5"
              size="lg"
            />
          </div>
        </Form>
      </div>
    </>
  );
}

export default EditPersonForm;
