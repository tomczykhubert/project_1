import FlexContainer from "../components/FlexContainer";
import PersonProfile from "../components/PersonProfile.jsx";

function Lab4() {
  const Item = (person) => (
    <PersonProfile key={person.id} person={person} columns="col-4" />
  );
  return <FlexContainer element={Item} />;
}

export default Lab4;
