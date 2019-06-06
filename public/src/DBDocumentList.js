import React from 'react'
import DocumentLink from "./DocumentLink";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
const DBDocumentList = (props) => {

    return (
        <List>{undefined===props.documents?"":props.documents.map(
            (document, i) => <ListItem>
                <DocumentLink
                    handledocumentclick={props.handledocumentclick}
                    key={i}
                    content={JSON.stringify(document)}
                    label={(JSON.stringify(document)).substr(0, 50)+'...'}
                />
            </ListItem>
        )}
        </List>
    )
}

export default DBDocumentList

