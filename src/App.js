import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { auth } from './Components/firebase';
import Imessages from './Components/Imessages/Imessages';
import Login from './Components/Login/Login';
import { selectUser,login,logout } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)
  const dispatch =useDispatch()
  useEffect(() => {
    
    auth.onAuthStateChanged(authuser => {
      //user is loged in
      if (authuser) {
        dispatch(login({
          uid: authuser?.uid,
          photo: authuser?.photoURL,
          email: authuser?.email,
          displayName: authuser?.displayName
        }))
      }
      //user is logged out
      else {
        dispatch(logout())
      }

    })
    
    },[dispatch])
  return (
    <div className="app">
      {
        user? <Imessages /> : <Login/>
      }
    </div>
  );
}

export default App;
