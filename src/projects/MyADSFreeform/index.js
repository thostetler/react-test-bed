import React from "react";
import SaveQueryForm from "./components/SaveQueryForm";
import CollapsePanel from "./components/CollapsePanel";

const onSubmit = (...args) => {
  console.log("submit", ...args);
};

const MyADSFreeform = () => {
  return (
    <section style={{ maxWidth: "400px" }}>
      <CollapsePanel
        render={({ collapse }) => (
          <SaveQueryForm onSubmit={onSubmit} onCancel={collapse} />
        )}
      />
    </section>
  );
};

export default MyADSFreeform;
