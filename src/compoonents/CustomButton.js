import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

function CustomButton({ text, handleCompletedThing }) {
  return (
    <>
      <button className="">
        <span className="pointer-events-none">{text}</span>
        <CheckCircleIcon className="h-5 w-5" />
      </button>
    </>
  );
}

export default CustomButton;
