import styles from './App.module.css';

function App() {
  let name = {
    firstName: "Subek",
    lastName: "Singh",
  };
  const printFullName = function (home, ghar) {
    console.log(this.firstName + " " + this.lastName + " " + home + " " + ghar );
  }
  let name2 = {
    firstName: "Harkamal",
    lastName: "Singh",
  };

  printFullName.call(name, "buttar", "A4");  // call method

  printFullName.apply(name2, ["melbourne", "A4"]);  // apply method

  const method = printFullName.bind(name, "roorkee", "F-'138");  // bind method
  method();
  const a = 100;
  {
    const a=10;
    console.log(a);
  }
  console.log(a);
 return <div className={styles.header}>Harry</div>
}

export default App;
