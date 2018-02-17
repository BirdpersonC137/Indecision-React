import React, { Component } from 'react';

export default class AddOption extends Component{
    state = {
        error: undefined
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const option = event.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(()=>({error}))
        if(!error) {
            event.target.elements.option.value = ''
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form 
                    className="add-option"
                    onSubmit={this.handleSubmit}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}