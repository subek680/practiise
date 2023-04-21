import styles from './App.module.css';
import React, { useEffect, useState, useCallback, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FirstFile from './FirstFile';
export const ThemeContext = createContext(null);
function App() {
  const navigate = useNavigate();
  const [state, setState] = useState("false");
  const [dumstate, dumsetState] = useState(false);
  var a;
  a = 100;
  useEffect(() => {
    // setState(false);
  }, [dumstate]);
  const handleSubmit = function () {
    // navigate('/practise');
    // setState(true)
    console.log('usecallback se aya hu', a)
    return 3;
  }

  return <ThemeContext.Provider value={{state, handleSubmit}}><div className={styles.header}><h1>Header</h1><FirstFile onClick={handleSubmit}/><button onClick={()=>
  {setState("true")}}>home page</button>
  <button onClick={()=>
  {dumsetState(!dumstate)}}>Dum home page</button></div>
  </ThemeContext.Provider>
}

export default App;
