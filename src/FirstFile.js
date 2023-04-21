import styles from './App.module.css';

function FirstFile() {
  let name = {
    firstName: "Subek",
    lastName: "Singh",
  };

 return <div className={styles.header}>{name.lastName}</div>
}

export default FirstFile;
