'use strict';

var app = {
    visible: true
};

var toggleVisibility = function toggleVisibility() {
    if (app.visible) {
        app.visible = false;
    } else {
        app.visible = true;
    }
    renderApp();
};
var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            'Show details'
        ),
        app.visible ? React.createElement(
            'p',
            null,
            'These are the details'
        ) : null
    );
    ReactDOM.render(template, appRoot);
};
var appRoot = document.getElementById('app');

renderApp();
