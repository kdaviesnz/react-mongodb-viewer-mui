import React from 'react'

const Button = (props) => <button onClick={props.onclick} className="btn btn-outline-primary btn-lg" type={props.type}>
    {props.label}
</button>

export default Button
