import styles from './App.module.css';

function App() {

  function dumm(xyz, okoko, e) {
    console.log('debounce chl gya' + xyz + ' ' + okoko + '   ' + e);
  }

  const onChange = debounce(dumm, 3000);

  function debounce(fn, d) {
    let timer;
    return function() {
      let context = this;
      clearInterval(timer);
      timer = setTimeout(()=>{
        fn.apply(context,['hello', 5, 'lplpl'])
        // fn('hello', 5, e)
      }, d)
    }
  }

  function thro(e) {
    console.log('throttle' + ' ' + e)
  }

  const onChangeThrottle = throttle(thro, 3000);

  function throttle(fn, d) {
    let flag = true;
    return function() {
      let context = this;
       if(flag) {
        fn.apply(context, ['plplp'])
        flag = false;
        setTimeout(()=> {
          flag = true;
        }, d)
       }
    }
  }

 return <div className={styles.header}><div>debounce</div><input onChange={(e) => {onChange()}}></input><div>throttle</div><input onChange={() => {onChangeThrottle()}}></input></div>
}

export default App;
