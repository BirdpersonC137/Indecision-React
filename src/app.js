
class App extends React.Component{
    render(){
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'
        const options = ['Thing One', 'Thing Two', 'Thing Four']
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        )
    }
}
class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}
class Action extends React.Component{
    handlePick(){
        alert('handlePick')
    }
    render() {
        return (        
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}
class Options extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        alert('REMOVE ALL')
    }
    render(){
        return(
            <div>
            <button onClick={this.handleRemoveAll}>Remove all</button>
                {this.props.options.map((option)=>{
                    return <Option key={option} optionText={option}/>
                })}
            </div>
        )
    }
}
class Option extends React.Component{
    render(){
        return(
            <p>{this.props.optionText}</p>
        )
    }
}
class AddOption extends React.Component{
    handleSubmit(event){
        event.preventDefault()
        const option = event.target.elements.option.value.trim()
        if(option){
            alert(option).trim
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))