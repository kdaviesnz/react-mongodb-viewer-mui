import React from 'react'
import Footer from "./Footer";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Content from './Content'

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    box1: {
        background: 'blue'
    },
    box2: {
        background: 'orange'
    },
    box3: {
        background: 'purple'
    },
    box4: {
        background: 'green'
    },
    box5: {
        background: 'red'
    },
    container: {
        marginBottom: 5
    }
});

class App extends React.Component {

    constructor(props) {

        const mongo = JSON.parse(sessionStorage.getItem('mongo'))

        super(props)
        this.state = {
            logged_in_ok: mongo !== null?mongo.logged_in_ok:false,
            dbs: mongo !==null && undefined != mongo.dbs?mongo.dbs:[],
            username:  mongo !== null?mongo.username:null,
            password:  mongo !== null?mongo.password:null,
            hostname:  mongo !==null && undefined != mongo.hostname?mongo.hostname:"localhost",
            port:  mongo !==null && undefined != mongo.port?mongo.port:"27017",
            SRV:  mongo !==null && undefined != mongo.srv?mongo.srv:true
        }

        this.handleLogin = this.handleLogin.bind(this)
        this.handleUserCredentials = this.handleUserCredentials.bind(this)
    }

    handleUserCredentials(event) {
        switch(event.target.name) {
            case "username":
                this.setState({username: event.target.value})
                break;
            case "password":
                this.setState({password: event.target.value})
                break;
            case "hostname":
                this.setState({hostname: event.target.value})
                break;
            case "port":
                this.setState({port: event.target.value})
                break;
            case "SRV":
                this.setState({SRV: event.target.value})
                break;
        }
    }

    handleLogin(event) {

        console.log("handleLogin()")

        event.preventDefault()

        fetch( "./api/auth/mongo", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(this.state)
        })
            .then((response) => {
                response.json().then(

                    (data) => {


                        if (undefined === data.dbs || (undefined !== data.name && data.name === "MongoError")) {
                            alert(data.message!==undefined?data.message:"Connection error")
                        } else {
                            this.setState(
                                {
                                    logged_in_ok:true,
                                    dbs:data.dbs.map(
                                        (db, i) => {
                                            db.key = i
                                            return db
                                        }
                                    )
                                }
                            )
                            sessionStorage.setItem('mongo', JSON.stringify({
                                logged_in_ok: this.state.logged_in_ok,
                                username: this.state.username,
                                password: this.state.password,
                                dbs: this.state.dbs,
                                port: this.state.port,
                                hostname: this.state.hostname,
                                SRV: this.state.SRV
                            }))
                        }
                    }
                )
                //    return response.json()
            }).catch((err) => console.log(err))
    }

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.root}>

                <Grid container className={classes.container} spacing={10}>
                    <Grid item xs={12}>
                        <Content handleLogin={this.handleLogin}
                                 handleusercredentials={this.handleUserCredentials}
                                 logged_in_ok={this.state.logged_in_ok} dbs={this.state.dbs}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Footer/>
                    </Grid>
                </Grid>

            </div>
        )
    }
}



export default withStyles(styles)(App);
