import useData from "../data/functions/useData";
function FlexContainer({ element }) {
  const data = useData();
  return <div className="row">{data.map((item) => element(item))}</div>;
}

export default FlexContainer;
