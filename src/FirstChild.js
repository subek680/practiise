import React, { useEffect } from 'react';
import styles from './App.module.css';

function FirstChild(props) {
    const {callback} = props;
    const count = 1;
    // useEffect(()=> {
        callback(count);
    // })
    console.log('kllkkllkkllk')
    return <>
        <h1>This is the Child File of first file</h1>
    </>
}

export default FirstChild;