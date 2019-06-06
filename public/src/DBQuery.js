import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";

const styles = theme => ({
    button: {
        margin: theme.spacing(1),
    }
});


const DBQuery = (props) => {

    const { classes } = props;

    return (
        <div className="row">
            <div className="col-md-9">
                <textarea onBlur={props.handlequerychange} name="mongoquery" style={{width:'100%'}}>{}</textarea>
            </div>
            <div className="col-md-3">
                <Button onClick={props.handlequery} variant="outlined" color="primary" className={classes.button}>
                    Query
                </Button>
            </div>
        </div>
    )
}

DBQuery.propTypes = {
    handlequery: PropTypes.func.isRequired,
}

export default withStyles(styles)(DBQuery);


