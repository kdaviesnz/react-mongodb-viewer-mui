import React from 'react'
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});

const FormGroup = (props) =>
    (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    id={props.name}
                    name={props.name}
                    onChange={props.handlechange}
                    defaultValue={props.defaultvalue}
                    label={props.labelText}
                    style={{ margin: 8 }}
                    placeholder=""
                    helperText={props.helpText}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
        </Grid>
    )

export default withStyles(styles)(FormGroup);