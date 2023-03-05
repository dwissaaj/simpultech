import React from 'react';
import './App.css';
import {Task} from "./stories/task/task";
import {ChatDisplay} from "./stories/chatFeature/chatDisplay";


function App() {
    const date: Date = new Date();
    return (
    <>
      <Task state={true} titleTask={'sdds'} daysTask={'ff'} timeTask={date} descriptionTask={"testing"} />
        <ChatDisplay name={'asas'} />

    </>
  );
}

export default App;
