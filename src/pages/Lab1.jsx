import PersonProfile from "../components/PersonProfile.jsx";
import useData from "../data/functions/useData";

function Lab1() {
  const data = useData();
  return (
    <div className="row px-5">
      {data.map((element) => (
        <PersonProfile key={element.id} person={element} columns="col-4" />
      ))}
    </div>
  );
}

export default Lab1;
