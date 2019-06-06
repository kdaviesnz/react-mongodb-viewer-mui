import React from 'react'

const DocumentLink = (props) => <div><a
    onClick={props.handledocumentclick}
    href={"#"}
    content={props.content}>
    {props.label}
    </a>
</div>

export default DocumentLink
