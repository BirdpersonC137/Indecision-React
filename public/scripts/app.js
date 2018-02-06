'use strict';

console.log('App.js is running');

//JSX - JavaScript XML
var app = {
    title: 'Indecision',
    subtitle: 'Put your hands in the hands of a computer',
    options: ['One', ' Two']
};
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
        'p',
        null,
        app.options ? app.options : 'no options'
    )
);

var count = 0;
var addOne = function addOne() {
    count = count + 1;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};
var removeOne = function removeOne() {
    count = count - 1;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var template2 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { id: '1', className: 'button', onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { id: '2', className: 'button', onClick: reset },
            'Reset'
        ),
        React.createElement(
            'button',
            { id: '3', className: 'button', onClick: removeOne },
            '-1'
        )
    );
    ReactDOM.render(template2, appRoot);
};
renderCounterApp();
