import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuLink: {
        textAlign:'right',
        float: 'right',
        marginRight: 10
    }
});

const Menu = withRouter((props) => {

        const { classes } = props;

        return (
            <header>
                <Grid container className={classes.container} spacing={10}>
                    <Grid item xs={12} sm={6}>
                        <h1>MongoDB  Viewer (MUI)</h1>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link to="/about" className={classes.menuLink}>
                            About MongoDB Viewer (MUI)
                        </Link>
                        {
                            props.logged_in_ok?
                                <Link to="/signout" className={classes.menuLink}>
                                    Sign out
                                </Link>:
                                <Link to="/" className={classes.menuLink}>
                                    Sign in
                                </Link>
                        }
                    </Grid>
                </Grid>
            </header>
        )
    }
)

export default withStyles(styles)(Menu);

