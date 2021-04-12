import React, { useState } from 'react';
import {Switch, FormControlLabel} from '@material-ui/core';

function DemoHooks(){
    const [slider, setSlider] = useState(false);

    return(
        <FormControlLabel label="B2Gether" control=
                {<Switch 
                    checked={slider}
                    onChange={(event) =>{
                    setSlider(event.target.checked)
                }}
                name="slider"
                color="primary"/>}/>
    );
}

export default DemoHooks;