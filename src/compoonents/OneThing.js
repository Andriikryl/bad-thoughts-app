import React from "react";
import CustomButton from "./CustomButton";

function OneThing({ thing, handleCompletedThing }) {
  return (
    <>
      <h1 className="text-3xl sm:text-6xl font-bold">{thing}</h1>
      <CustomButton
        text="leave it "
        handleCompletedThing={handleCompletedThing}
      />
    </>
  );
}

export default OneThing;
