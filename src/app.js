//JSX - JavaScript XML
let app = {
    title: 'Indecision',
    subtitle: 'Put your hands in the hands of a computer',
    options: ['One', ' Two'],
    todo: ['']
}
//This function is only going to be referenced
//We do not need to call this function in onSubmit
const onFormSubmit = (event) =>{
    event.preventDefault()
    
    const option = event.target.elements.option.value;
    console.log(event.target.elements.option.value);

    if(option){
        app.options.push(option);
        event.target.elements.option.value = '';
        renderApp()
    }
}
const onMakeDecision = () =>{
    let random = Math.floor(Math.random()*app.options.length);
    app.todo[0]=app.options[random]
    renderApp()
}
const removeAll = ()=>{
    app.options = []
    renderApp()
}
//And and tenerary operators are perfectly fine to use in render methods.
// {(app.subtitle && <p>{app.subtitle}</p>)}

//below is the JSX syntax automatically detected by react if react is loaded/present
//JSX stands for Javascript XML
const renderApp = () =>{
    const template = ( 
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle && <p>{app.subtitle}</p>)}
            <ol>
                {app.options.length? app.options.map((option)=><li key={option}>{option}</li>):'No options'}
            </ol>
            <p>Array length: {app.options.length}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Submit</button>
                <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
                <button onClick={removeAll}>Remove all</button>
            </form>
            <div>
                What should I do?: <p>{app.todo? app.todo:"nothing"}</p>
            </div>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
//application root div
const appRoot = document.getElementById('app')
//renders the whole container/component. First argument is the component
//that you want to render and second is the place you wanna render it in.
// ReactDOM.render(template, appRoot);
renderApp()