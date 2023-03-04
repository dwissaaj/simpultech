import React from 'react';
import './App.css';
import {Task} from "./stories/task/task";

function App() {
    const date: Date = new Date();
    return (
    <>
      <Task state={true} titleTask={'sdds'} daysTask={'ff'} timeTask={date} descriptionTask={"testing"} />
    </>
  );
}

export default App;
