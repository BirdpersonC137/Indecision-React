//Stateless vs Functional components.

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
    componentWillUnmount() {
        
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

/////////////////////////////////////////////////////////////////////////////

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

// Default props
// default props are used when you need the prop to be there and nothing is provided
// default props can also substitute primitive and non primitive props from being passed in
Header.defaultProps = {
    title: 'Indecision'
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
        this.setState(()=>({error}))
        if(!error) {
            event.target.elements.option.value = ''
        }
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