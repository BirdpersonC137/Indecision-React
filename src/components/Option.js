import React from 'react';

const Option = (props)=>(
        <div>
            {props.optionText}
            <button 
            // if we just used onClick = {handleDeleteOption}
            // it would return an event and pass it up as an argument
            //to handleDeleteOption in <App/> component, so we use the arrow function
            // with an event. This allows us to pass in the argument
            // optionText up, which filter then utilizes.
                onClick={(e)=>{
                    props.handleDeleteOption(props.optionText)
                }}

            >
                Remove
            </button>
        </div>
)

export default Option