// import { ThemeContext } from '@emotion/react';
import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from './App';
function SecondFile(props) {
    const theme = useContext(ThemeContext);
    const {state, handleSubmit }= theme 
    useEffect(() => {
    }, [])
    handleSubmit()
    return (
        <h1>Khokhar {state}</h1>
    )
}

export default SecondFile;