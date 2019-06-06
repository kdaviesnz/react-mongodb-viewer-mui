import React from 'react'

const styles = {
    float: 'left',
    marginRight: 10
}

const CollectionName = (props) => <div style={styles}><a
    onClick={props.handlecollectionnameclick}
    href={"#"}
    name={props.name}>
    {props.label}
    </a>
</div>

export default CollectionName
