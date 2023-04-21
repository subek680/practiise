import styles from './App.module.css';
import React, {useState} from 'react';
import FirstFile from './FirstFile';

function App() {
  const [state,setState] = useState(false);
  let name = {
    firstName: "Subek",
    lastName: "Singh",
  };
  function onClick() {
    setState(true)
  }
  const promise = new Promise(function(resolve,reject){
    setTimeout(()=> {console.log('jjjjjjkfdkdfkdkdk'); resolve('jjjjjjkfdkdfkdkdk999999999');},2000);
    setTimeout(()=> {reject('mmmm');},10000);
  })

  async function xyz() {
    return await Promise.resolve('kookokoko');
  }

  Promise.race([promise, xyz()]).then(value => console.log(value,'value'))
 return <div className={styles.header}>Harry {state}<button onClick={onClick}>Button</button><FirstFile/></div>
}

export default App;
