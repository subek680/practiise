import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function FirstFile() {
    const [state, setState] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        // console.log('kokokokookok')
    }, [])
    console.log('plppplplp')
    return (
        <><h1>Subek Singh</h1><button onClick={() => { navigate('/jjjjjj'); }}>button</button></>
    )
}

export default FirstFile;