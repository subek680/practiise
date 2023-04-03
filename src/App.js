import React, {useState} from 'react';
import './App.css';

function App() {
  const [state,setState] = useState({name: "", radio: false});
   function outest () {
     setTimeout(function () {
      console.log(a)
     }, 0)
   }
  const setValue = (e, keyName) => {
    const temp = state;
    temp[keyName] = e;
    // setState((prevState, keyName) => ({...prevState, keyName: e}));
    setState({...temp});
  }
   outest();
   const a = 10000;
   console.log(0)
  return (
    <div className="App" suppressHydrationWarning={true}>
      <form action="/uuu" target="_top" method='get'>
        <label>name</label>
        <input type="text" onChange={(e) => {setValue(e.target.value, 'name')}} value={state.name}></input><br></br>
        <label>hello</label>
        <input type="checkbox" onChange={(e) => {console.log(e);setValue(e.target.checked, 'radio')}} value={state.radio}></input><br></br>
        <br></br>
        <label for="checkbox">This is for multipal input.</label><br></br>
            <input id="checkbox" type="radio" />lovepreet<br></br>
            <input id="checkbox" type="radio" />subek<br></br>
            <input id="checkbox" type="radio" />amrit<br></br>
            <input type="submit" value="Submit" onChange={(e) => {console.log(e.target.value)}}></input>
      </form>
      <h1>Harrry</h1>
    </div>
  );

}

export default App;
