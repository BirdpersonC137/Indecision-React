class Visibility extends React.Component{
    constructor(props){
        super(props)
        this.handleVisibility = this.handleVisibility.bind(this)
        this.state = {
            visible: false
        }
    }
    handleVisibility(){

        this.setState((prevState)=>{
            return {
                visible: !prevState.visible
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Toggle Visibility</h1>
                <button onClick={this.handleVisibility}>{this.state.visible? 'hide details':'show details'}</button>
                {this.state.visible?<p>Showing details</p>:null}
            </div>
        )
    }
}
ReactDOM.render(<Visibility />, document.getElementById('app'))


//===
// |
// V


// const app = {
//     visible: false
// }

// const toggleVisibility = () =>{
//     // if(app.visible){
//     //     app.visible = false
//     // }else{
//     //     app.visible = true
//     // }
//     app.visible = !app.visible
//     renderApp()
// }
// const renderApp = () =>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{app.visible? 'Hide details':'Show details'}</button>
//             {app.visible? <p>These are the details</p> : null}
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }
// const appRoot = document.getElementById('app')

// renderApp()