import React from "react";
import { LibraryCollaborators, MyADSFreeform, AddToLibrary } from "./projects";

const Mini = ({ component }) => {
  return (
    <section style={{ padding: "1.5rem", border: "red dashed 1px" }}>
      {component}
    </section>
  );
};

function App() {
  return (
    <div>
      {/* <Mini component={<Example />} /> */}
      <Mini component={<LibraryCollaborators />} />
      {/* <Mini component={<MyADSFreeform />} />
      <Mini component={<AddToLibrary />} /> */}
    </div>
  );
}

export default App;
