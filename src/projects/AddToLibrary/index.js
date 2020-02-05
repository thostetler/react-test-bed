import React from "react";
// import AddToLibraryForm from "./components/AddToLibraryForm";
import CollapsePanel from "./components/CollapsePanel";

const onSubmit = (...args) => {
  console.log("submit", ...args);
};

const AddToLibrary = () => {
  return (
    <section style={{ maxWidth: "400px" }}>
      <CollapsePanel
        render={({ collapse }) => (
          <div>test</div>
          // <SaveQueryForm onSubmit={onSubmit} onCancel={collapse} />
        )}
      />
    </section>
  );
};

export default AddToLibrary;
