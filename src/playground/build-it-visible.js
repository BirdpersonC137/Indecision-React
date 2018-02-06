const app = {
    visible: false
}

const toggleVisibility = () =>{
    if(app.visible){
        app.visible = false
    }else{
        app.visible = true
    }
    renderApp()
}
const renderApp = () =>{
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>Show details</button>
            {app.visible? <p>These are the details</p> : null}
        </div>
    )
    ReactDOM.render(template, appRoot)
}
const appRoot = document.getElementById('app')

renderApp()