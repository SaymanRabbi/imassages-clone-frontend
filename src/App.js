import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Imessages from './Components/Imessages/Imessages';
import Login from './Components/Login/Login';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
      {
        user? <Imessages /> : <Login/>
      }
    </div>
  );
}

export default App;
