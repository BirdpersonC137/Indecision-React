import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption'
import Header from './components/Header'
import Action from './components/Action'
import Options from './components/Options'
//Stateless component does not have access to 'this' or React.Component
//methods such as render. the function itself substitutes render.
// Stateless functional components do not have access to this because
// Arrow functions do not 
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json)
            if(options){
                this.setState(()=>({options}))
            }
        } catch (error){
            
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    
    handleDeleteOptions(){
        this.setState(() => ({options: []}))
    }
    //create a new method that will take in an option that we wanna delete
    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>{
                return {
                    options: prevState.options.filter((option)=>{
                        return optionToRemove !== option;
                    })
                }
        })
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.includes(option)){
            return 'This option already exists';
        }
        this.setState((prevState)=>({options: prevState.options.concat([option])}));
    }
    handlePick(){
       alert(this.state.options[Math.floor(Math.random()*this.state.options.length)])
    }
    render(){
        const subtitle = 'Put your life in the hands of a computer'
        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length >0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'))


