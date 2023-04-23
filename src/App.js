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
  // class and inheritance
  class Car {
    constructor(boon) {
      this.boon = boon;
    }
    add() {
      return this.boon + ' hhhh '
    }
    static hello() {
      return "HEllO";
    }
  }
  class Model extends Car {
    constructor(mod,brand) {
      super(brand);
      this.model = mod;
    }
      show() {
        return this.add() + ' hanji ' + this.model;
      }
  }
  
  const cc = new Model("hello", "kida?")

  // encapsulation

  var encap = function() {
    var name = "Subek";
    return {
      getName: function () {
        return name
      },
      setName: function(dumm) {
        if(typeof dumm !== "string"){
          console.log("Invalid")
        }
        else {
          name = dumm;
        }
      }
    }
  }()
encap.name = 'jjjjj'
console.log(encap.setName(444), "encap", encap.getName() )
 return <div className={styles.header}>Harry {state}<button onClick={onClick}>Button</button><FirstFile/></div>
}

export default App;
