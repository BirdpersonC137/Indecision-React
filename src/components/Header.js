import React from 'react';
const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
)

// Default props
// default props are used when you need the prop to be there and nothing is provided
// default props can also substitute primitive and non primitive props from being passed in
Header.defaultProps = {
    title: 'Indecision'
}

export default Header