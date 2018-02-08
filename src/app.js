//Stateless vs Functional components.

//Stateless component does not have access to 'this' or React.Component
//methods such as render. the function itself substitutes render.
// Stateless functional components do not have access to this because
// Arrow functions do not 
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            options:[]
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    handleDeleteOptions(){
        this.setState(()=>{
            return{
                options: []
            }
        })
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.includes(option)){
            return 'This option already exists';
        }
        this.setState((prevState)=>{
            return {
                options: prevState.options.concat([option])
            }
        })
    }
    handlePick(){
       alert(this.state.options[Math.floor(Math.random()*this.state.options.length)])
    }
    render(){
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length >0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}
/////////////////////////////////////////////////////////////////////////////

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}
// class Header extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }
//////////////////////////////////////////////////////////////////////////
const Action = (props) => {
    return (        
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What should I do?
            </button>
        </div>
    )
}
// class Action extends React.Component{
//     render() {
//         return (        
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >What should I do?
//                 </button>
//             </div>
//         )
//     }
// }
/////////////////////////////////////////////////////////////////////////
const Options = (props) => {
        return(
            <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
                {props.options.map((option)=>{
                    return <Option key={option} optionText={option}/>
                })}
            </div>
        )   
}
// class Options extends React.Component{
//     render(){
//         return(
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//                 {this.props.options.map((option)=>{
//                     return <Option key={option} optionText={option}/>
//                 })}
//             </div>
//         )
//     }
// }
//////////////////////////////////////////////////////////////////////////
const Option = (props)=>{
    return(
        <p>{props.optionText}</p>
    )
}
// class Option extends React.Component{
//     render(){
//         return(
//             <p>{this.props.optionText}</p>
//         )
//     }
// }
/////////////////////////////////////////////////////////////////////////
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleSubmit(event){
        event.preventDefault()
        const option = event.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(()=>{
            return{
                error: error
            }
        })
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name } </p>
//             <p>Age: {props.age} </p>            
//         </div>
//     )
// }
ReactDOM.render(<App />, document.getElementById('app'))