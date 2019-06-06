import React from 'react'
import FormGroup from './FormGroup'
import Fab from '@material-ui/core/Fab'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    fab: {
        margin: theme.spacing(1),
    },
});

const MongoConnectionForm = (props) => {

    const { classes } = props;

    return (
        <form>
            <FormGroup defaultValue="" handlechange={props.handleusercredentials} type="text" name="username" id="username" labelText="Username"
                       help="usernameHelp" helpText="Please enter your Mongo username"/>
            <FormGroup defaultValue="" handlechange={props.handleusercredentials} type="password" name="password" id="password" labelText="Password"
                       help="passwordHelp" helpText="Please enter your Mongo password"/>
            <FormGroup defaultvalue="" handlechange={props.handleusercredentials} type="text" name="hostname" id="hostname" labelText="Hostname"
                       help="hostnameHelp" helpText="Please enter the hostname"/>
            <FormGroup defaultvalue="27017" handlechange={props.handleusercredentials} type="text" name="port" id="port" labelText="Port"
                       help="hostnameHelp" helpText="Please enter the port"/>
            <FormGroup defaultvalue={true} handlechange={props.handleusercredentials} type="checkbox" name="SRV" id="srv" labelText="SRV Record"
                       help="SRVHelp" helpText=""/>
            <Fab onClick={props.handleLogin} variant="extended" aria-label="Delete" className={classes.fab}>
                Connect
            </Fab>
        </form>
    )
}

MongoConnectionForm.propTypes = {
    handleLogin: PropTypes.func,
    handleusercredentials: PropTypes.func
}

export default withStyles(styles)(MongoConnectionForm);