import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function SortingButton({ title, type, dispatch, initialData }) {
  const actions = [
    {
      name: "Ascending order",
      onClick: () =>
        dispatch({
          type: type,
          order: "ascending",
          initialData: initialData,
        }),
    },
    {
      name: "Descending order",
      onClick: () =>
        dispatch({
          type: type,
          order: "descending",
          initialData: initialData,
        }),
    },
    {
      name: "Natural order",
      onClick: () =>
        dispatch({
          type: type,
          order: "natural",
          initialData: initialData,
        }),
    },
  ];

  return (
    <DropdownButton title={title}>
      {actions.map((item) => (
        <Dropdown.Item key={item.name} onClick={item.onClick}>
          {item.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default SortingButton;
