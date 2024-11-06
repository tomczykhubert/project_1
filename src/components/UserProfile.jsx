import { useParams } from "react-router-dom";
import useFetch from "../data/functions/useFetch";
import { Card } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

function UserProfile() {
  const { id } = useParams();
  const {
    data: user,
    loading: userLoading,
    error: userError,
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const isLoading = userLoading;
  const hasError = userError;
  if (isLoading)
    return <ClipLoader color="#0d6efd" size={100} speedMultiplier="2" />;
  if (hasError) return <p>Error loading data.</p>;
  return (
    <Card className="m-auto w-50">
      <h3>{user.name}</h3>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Street: {user.address.street}</p>
      <p>Suite: {user.address.suite}</p>
      <p>City: {user.address.city}</p>
      <p>Zipcode: {user.address.zipcode}</p>
      <p>Latitude: {user.address.geo.lat}</p>
      <p>Longitude: {user.address.geo.lng}</p>
      <p>Company: {user.company.name}</p>
      <p>Company catchphrase: {user.company.catchPhrase}</p>
      <p>Business services: {user.company.bs}</p>
    </Card>
  );
}

export default UserProfile;
