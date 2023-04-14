import styles from './App.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FirstFile from './FirstFile';
import SecondFile from './SecondFile';
function App() {
  const navigate = useNavigate();
  // const [navigationState, setNavigationState] = useState(0);
//   function recurr (arr) {
//     let temp =[];
//     for(let i=0; i<arr.length; i++) {
//       const number = arr[i];
//       let count = 0;
//       for (let i = 2; i <= number; i++) {

//         if(number%i=== 0) {
//           count++;
//         }
//       }
//       temp.push(count);
//     }
//     return temp;
//     }
//   function xyz (i) {
//     return i === 1;
//   }
//   function primeFactors ( number ) {
//     let arr =[];
//   for (let i = 2; i <= number/2; i++) {

//     if(number%i=== 0) {
//         arr.push(i);
//     }
//   }
//    console.log(recurr(arr), 'lplppllpplppplp');
//    return arr;
// }

console.log('lppplplp', 5%2);
  return (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.item} onClick={() => { navigate('/first') }}>First File</div>
      <div className={styles.item} onClick={() => { navigate('/second') }}>Second File</div>
    </div>
    {/* <div className={styles.content}>
      {navigationState === 0 && <FirstFile />}
      {navigationState === 1 && <SecondFile />}
    </div> */}
  </div>
  );
}

export default App;
