import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton({ className, variant, size }) {
  let navigate = useNavigate();
  return (
    <>
      <button
        className={className}
        variant={variant}
        size={size}
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </>
  );
}

export default BackButton;
