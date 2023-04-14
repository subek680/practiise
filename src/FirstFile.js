import React from 'react';
import styles from './App.module.css';
import { useNavigate } from 'react-router-dom';
import FirstChild from './FirstChild';

function FirstFile() {
    // const navigate = useNavigate();
    var callbackValue;
    const callback = (value) => {
       callbackValue = value;
    //    console.log(callbackValue, 'callbackValue', value)
    }

    // console.log(primeFactors(4));
  return <>
  <h1>This is first File</h1>
     <FirstChild callback={callback}/>
  </>
}

export default FirstFile;