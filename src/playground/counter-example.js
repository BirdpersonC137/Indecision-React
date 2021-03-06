class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handlePlusOne = this.handlePlusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        try{
            const int = localStorage.getItem('count')
            const count = parseInt(int, 10)
            if(!isNaN(count)){
                this.setState(()=>{
                    return {count}
                })
            }
        } catch(e) {
            
        }
        // || this.setState(()=>({count}))
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count != this.state.count){
            localStorage.setItem('count', this.state.count)
        }
    }
    
    handlePlusOne(){
        //when we are inside the function we have access to previous value
        //which is the first argument in the function
        this.setState((prevState)=>{
            return{
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count -1
            }
        })
    }
    handleReset(){
        this.setState(()=>{
            return{
                count: 0
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>                
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))