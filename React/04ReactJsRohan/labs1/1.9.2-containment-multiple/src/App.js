import React from 'react';
import './App.css';
import SplitPane from './SplitPane/SplitPane';
import Contacts from './Contacts/Contacts';
import Chat from './Chat/Chat';

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

export default App;
