import styles from './App.module.css';
import { connect } from 'react-redux';
function App(props) {
  let name = {
    firstName: "Harkamal",
    lastName: "Singh",
  };

 return <div className={styles.header}>
    <div>{props.firstProp}</div>
    <div>{props.xyzProp}</div>
    <div>{props.secondProp}</div>
    <button onClick={()=>{props.updateFirstProp()}}>1 dispatch</button>
    <button onClick={()=>{props.updateSecondProp({type: "ANOTHER_ACTION", payload: "changed value"})}}>2 dispatch</button>
    </div>
}
const mapStateToProps = (state) =>{
    // console.log(state,'jujuju')
    return {
        firstProp: state.someProp,
        xyzProp: state.xyz,
        secondProp: state.anotherProp
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        updateFirstProp: () => {dispatch({type: "SOME_ACTION"})},
        updateSecondProp:  (action) => {dispatch(action)}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
