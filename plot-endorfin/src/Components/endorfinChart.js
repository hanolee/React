import React, {useState} from 'react'
import Plot from 'react-plotly.js';

const endorfinChart = (props) => {
    
    return(
        <div>
            {props.isFulled} ? <div>
            <Plot
                data={props.data}
                layout={props.layout}/>
            


            <button>Reset</button>
            </div>
            : 
            <div>없어요</div>
        </div>
    )
}

export default endorfinChart