import React, { useEffect, useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import SecondFile from './SecondFile';
function FirstFile(props) {
    const [state, setState] = useState(false);
    const navigate = useNavigate();
    const {onClick} = props;
    useEffect(() => {
        // console.log('kokokokookok')
    }, [])
    console.log('plppplplp')
    return (
        <><h1>Subek Singh</h1><button onClick={onClick}>harrr</button><SecondFile /></>
    )
}

export default FirstFile;