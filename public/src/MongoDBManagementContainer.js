import React from 'react'
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
//import Content from "./Content";
//import Footer from "./Footer";
import DBListContainer from './DBListContainer'
import MongoConnectionFormContainer from "./MongoConnectionFormContainer";
import DBCollectionList from "./DBCollectionList"
import DBDocumentList from "./DBDocumentList";
import MongoDocument from "./MongoDocument"
//import LoadingIndicator from "./LoadingIndicator";
import DBQuery from './DBQuery'
import PropTypes from "prop-types";

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginLeft: theme.spacing.unit * 1,
        marginRight: theme.spacing.unit * 1,
        marginTop: theme.spacing.unit * 1,
        marginBottom: theme.spacing.unit * 1,
    }
});

class MongoDBManagementContainer extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            collections:[],
            documents:[],
            document:"",
            loading: false,
            query: ""
        }

        this.handleDBNameClick = this.handleDBNameClick.bind(this)
        this.handleFetchCollections = this.handleFetchCollections.bind(this)
        this.handleDocumentClick = this.handleDocumentClick.bind(this)
        this.handleQuery = this.handleQuery.bind(this)
        this.handleQueryChange = this.handleQueryChange.bind(this)
    }

    handleDBNameClick(event) {
        event.preventDefault()
        this.setState({loading:true})
        const mongo = JSON.parse(sessionStorage.getItem('mongo'))

        fetch("./api/collections", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                username: mongo.username,
                password:mongo.password,
                database: event.target.name,
                hostname: mongo.hostname,
                port: mongo.port,
                SRV: mongo.SRV
            })
        })
            .then((response) => {
                response.json().then(

                    (data) => {
                        if (undefined !== data.name && data.name === "MongoError") {
                            alert(data.message)
                        } else {
                            this.setState(
                                {
                                    collections: data.collections,
                                    database: data.database,
                                    documents:[],
                                    document:"",
                                    collection:null
                                }
                            )
                            this.setState({loading:false})
                        }
                    }
                )
                //    return response.json()
            }).catch((err) => console.log(err))
    }

    handleFetchCollections(event, query) {
        event.preventDefault()
        const collection = query===undefined?event.target.name:this.state.collection
        console.log(`collection ${collection}`)
        this.setState({loading:true})
        const mongo = JSON.parse(sessionStorage.getItem('mongo'))

        fetch("./api/documents", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                username: mongo.username,
                password: mongo.password,
                database: this.state.database,
                collection: collection,
                hostname: mongo.hostname,
                port: mongo.port,
                SRV: mongo.SRV,
                query: query===undefined?"":query
            })
        })
            .then((response) => {
                response.json().then(

                    (data) => {
                        if (undefined==data.documents || (undefined !== data.name && data.name === "MongoError")) {
                            alert(undefined === data.message?"Could not get collections":data.message)
                        } else {
                            this.setState(
                                {
                                    documents: data.documents,
                                    collection: collection,
                                    document: ''
                                }
                            )
                            this.setState({loading:false})
                        }
                    }
                )
                //    return response.json()
            }).catch((err) => console.log(err))
    }

    handleDocumentClick(event) {
        this.setState(
            {
                document: event.target.getAttribute('content')
            }
        )
    }

    handleQueryChange(event) {
        this.setState({
                query: event.target.value
            }
        )
    }

    handleQuery(event) {
        event.preventDefault()
        console.log('Query: ' + this.state.query)
        if (this.state.database === undefined) {
            alert("Please select a database")
        } else if(this.state.collection === undefined) {
            alert("Please select a collection")
        } else {
            this.handleFetchCollections(event, this.state.query)
        }
    }


    render() {

        const { classes } = this.props;

        const {logged_in_ok} = this.props

        const database_list_styles = {
            borderRight: '1px solid gray'
        }

        const document_detail_styles = {
            borderLeft: '1px solid gray'
        }

        const collections_styles = {
            borderBottom: '1px solid gray'
        }

        if (logged_in_ok) {
            return (

                <Grid container spacing={10}>
                    <Grid item sm={12} md={4} className={classes.box3}>
                        <h5>Databases</h5>
                        <DBListContainer  dbs={this.props.dbs} handledbnameclick={this.handleDBNameClick} />
                    </Grid>
                    <Grid item sm={12} md={4} className={classes.box4}>
                        <Grid container spacing={10}>
                            <Grid item sm={12}>
                                <h5>{undefined!==this.state.database && this.state.database!==null?`${this.state.database.charAt(0).toUpperCase() + this.state.database.slice(1)} collections`:`No database selected`}</h5>
                                <DBCollectionList handlecollectionnameclick={this.handleFetchCollections} collections={this.state.collections}/>
                            </Grid>
                            <Grid item sm={12}>
                                <DBQuery handlequery={this.handleQuery} handlequerychange={this.handleQueryChange}/>
                            </Grid>
                            <Grid item sm={12}>
                                <h5>{undefined!==this.state.collection && this.state.collection!==null?`${this.state.collection.charAt(0).toUpperCase() + this.state.collection.slice(1)} documents`:`No collection selected`}</h5>
                                <DBDocumentList handledocumentclick={this.handleDocumentClick} documents={this.state.documents}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={12} md={4} className={classes.box5}>
                        <h5>Document</h5>
                        <MongoDocument document={this.state.document} />
                    </Grid>
                </Grid>

            )
        } else {

            return (
                <div>
                    <MongoConnectionFormContainer handleusercredentials={this.props.handleusercredentials} handleLogin={this.props.handleLogin}/>
                </div>
            )
        }
    }

}

MongoDBManagementContainer.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleusercredentials: PropTypes.func.isRequired
}

export  default withStyles(styles)(MongoDBManagementContainer);

