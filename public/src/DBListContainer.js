import React from 'react'
import DBList from './DBList'

const DBListContainer = (props) => {
    return undefined !== props.dbs ?<DBList dbs={props.dbs} handledbnameclick={props.handledbnameclick}/> : ""
}

export default DBListContainer

