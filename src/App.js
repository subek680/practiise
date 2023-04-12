import styles from './App.module.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  useEffect(() => {
    console.log('kokokokookok')
    setState(false);
  }, []);
  console.log(onClick);
  var a;
  a = 100;
  function onClick() {
    navigate('/practise');
    setState(true)
  }
  return <div className={styles.header}><button onClick={onClick}>harrrg</button><div>hhhhh</div></div>
}

export default App;
