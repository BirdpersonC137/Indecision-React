'use strict';

//JSX - JavaScript XML
var app = {
    title: 'Indecision',
    subtitle: 'Put your hands in the hands of a computer',
    options: ['One', ' Two'],
    todo: ['']
    //This function is only going to be referenced
    //We do not need to call this function in onSubmit
};var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();

    var option = event.target.elements.option.value;
    console.log(event.target.elements.option.value);

    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderApp();
    }
};
var onMakeDecision = function onMakeDecision() {
    var random = Math.floor(Math.random() * app.options.length);
    app.todo[0] = app.options[random];
    renderApp();
};
var removeAll = function removeAll() {
    app.options = [];
    renderApp();
};
//And and tenerary operators are perfectly fine to use in render methods.
// {(app.subtitle && <p>{app.subtitle}</p>)}

//below is the JSX syntax automatically detected by react if react is loaded/present
//JSX stands for Javascript XML
var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'ol',
            null,
            app.options.length ? app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            }) : 'No options'
        ),
        React.createElement(
            'p',
            null,
            'Array length: ',
            app.options.length
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Submit'
            ),
            React.createElement(
                'button',
                { disabled: app.options.length === 0, onClick: onMakeDecision },
                'What should I do?'
            ),
            React.createElement(
                'button',
                { onClick: removeAll },
                'Remove all'
            )
        ),
        React.createElement(
            'div',
            null,
            'What should I do?: ',
            React.createElement(
                'p',
                null,
                app.todo ? app.todo : "nothing"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
//application root div
var appRoot = document.getElementById('app');
//renders the whole container/component. First argument is the component
//that you want to render and second is the place you wanna render it in.
// ReactDOM.render(template, appRoot);
renderApp();
