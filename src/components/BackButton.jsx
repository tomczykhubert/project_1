import { useNavigate } from "react-router-dom";

function BackButton({ className, size }) {
  let navigate = useNavigate();
  return (
    <>
      <button className={className} size={size} onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
}

export default BackButton;
