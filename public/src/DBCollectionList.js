import React from 'react'
import CollectionName from './CollectionName'

const styles = {
    float: 'left',
    width: '100%'
}

const DBCollectionList = (props) => {

    return (
        <div style={styles}>{ undefined===props.collections?"":props.collections.map(
            (collection, i) => <CollectionName name={collection.name} label={collection.name} handlecollectionnameclick={props.handlecollectionnameclick} key={i}>{collection.name}</CollectionName>
        )}</div>
    )
}

export default DBCollectionList

