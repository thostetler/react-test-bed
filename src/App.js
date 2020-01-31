import React from "react";
import { LibraryCollaborators } from "./projects";

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
    </div>
  );
}

export default App;
