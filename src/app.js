console.log('App.js is running')

//JSX - JavaScript XML
let app = {
    title: 'Indecision',
    subtitle: 'Put your hands in the hands of a computer',
    options: ['One', ' Two']
}
const template = ( 
    <div>
        <h1>{app.title}</h1>
        {(app.subtitle && <p>{app.subtitle}</p>)}
        <p>{app.options? app.options : 'no options'}</p>
    </div>
);

let count = 0
const addOne = () => {
    count = count + 1;
    renderCounterApp()
}
const reset = () =>{
    count = 0;
    renderCounterApp();
}
const removeOne = () =>{
    count = count - 1;
    renderCounterApp();
}

const appRoot = document.getElementById('app')

const renderCounterApp = () =>{
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button id="1" className="button" onClick={addOne}>+1</button>
            <button id="2" className="button" onClick={reset}>Reset</button>
            <button id="3" className="button" onClick={removeOne}>-1</button>
        </div>
    );
    ReactDOM.render(template2, appRoot);
}
renderCounterApp()