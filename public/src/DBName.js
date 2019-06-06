import React from 'react'

const DBName = (props) => <div><a
    onClick={props.handledbnameclick}
    href={"#"}
    name={props.dbname}>
    {props.label}
    </a>
</div>

export default DBName
