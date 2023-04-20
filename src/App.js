import styles from './App.module.css';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import FirstFile from './FirstFile';

function App() {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [dumstate, dumsetState] = useState(false);
  var a;
  a = 100;
  useEffect(() => {
    console.log('kokokokookok')
    // setState(false);
  }, [dumstate]);
  const handleSubmit = useCallback(function onClick() {
    // navigate('/practise');
    // setState(true)
    console.log('usecallback se aya hu', a)
  },[state])
  a++;
  console.log(dumstate, a)
  return <div className={styles.header}><h1>Header</h1><FirstFile onClick={handleSubmit}/><button onClick={()=>
  {setState(true)}}>home page</button>
  <button onClick={()=>
  {dumsetState(!dumstate)}}>Dum home page</button></div>
}

export default App;
