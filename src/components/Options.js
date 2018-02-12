import React from 'react';
import Option from './Option'
const Options = (props) => {
    return(
        <div>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.map((option)=>{
                return (
                     <Option 
                        key={option} 
                        handleDeleteOption={props.handleDeleteOption} 
                        optionText={option} 
                     />
                )
            })}
        </div>
    )   
}

export default Options