import React from 'react'
import DBName from "./DBName";

const DBList = (props) => {

    return (
        <div>{ undefined===props.dbs?"":props.dbs.map(
            (db, i) => <DBName key={i} handledbnameclick={props.handledbnameclick} dbname={db.name} label={db.name} />
        )}</div>
    )
}

export default DBList

