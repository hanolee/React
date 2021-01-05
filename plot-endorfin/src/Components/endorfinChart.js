import React, {useState} from 'react'
import Plot from 'react-plotly.js';

const endorfinChart = (props) => {
    
    return(
        <>
            <div>
                <Plot
                    data={props.data}
                    layout={props.layout}/>
                <button>Reset</button> 
            </div>
        </>
    )
}

export default endorfinChart