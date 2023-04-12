import styles from './App.module.css';

function App() {
  let name = {
    firstName: "Subek",
    lastName: "Singh",
  };

  const arr = [2,4,7];

  // polyfill of map
  Array.prototype.map = function(callback){
    let temp = [];
    for(let i=0;i<this.length; i++) {
       temp.push(callback(this[i]));
    }
    return temp;
  };
  function multiply(x) {
    return 2*x
  }
  const temp = arr.map(multiply);
  console.log(temp, 'polyfill of map');

  // polyfill of reduce
  function sum (x, curr) {
    x = x*curr;
    return x;
  }
  console.log(arr.reduce(sum, 6), arr);
  Array.prototype.red = function(callback, accumulator) {
    let temp = accumulator;
    for(let i = 0; i<this.length; i++) {
      temp = callback(temp, this[i])
    }
    return temp;
  }
  console.log(arr.red(sum, 1), 'polyfill of reduce',arr)
 return <div className={styles.header}>Harry</div>
}

export default App;
