import React from "react";
import FirstComponent from "./components/FirstComponent";
import UserComponent from "./components/UserComponent";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>Hello, Welcome to React and TypeScript</h1>
      <FirstComponent />
      <UserComponent
        name="Bikal Adhikari"
        age={30}
        address="Sydney, Australia"
        dob={new Date()}
      />
    </div>
  );
};

export default App;
