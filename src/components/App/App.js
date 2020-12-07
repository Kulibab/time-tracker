import React from "react";
import AddTrack from "../AddTrack/AddTrack";

import c from './App.module.css';

const App = () => {
  return (
    <div className={c.container}>
      <h1 className={c.title}>tracker</h1>
      <AddTrack />
    </div>
  );
}

export default App;
