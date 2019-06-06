import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Signout from './Signout'
import PropTypes from "prop-types";
import Divider from '@material-ui/core/Divider'

const MainRouter = (props) => {

    const mongo = JSON.parse(sessionStorage.getItem('mongo'))

    const dbs = props.dbs
    const handleLogin = props.handleLogin
    const logged_in_ok = props.logged_in_ok
    const handleusercredentials = props.handleusercredentials

    // https://tylermcginnis.com/react-router-pass-props-to-components/
    return (
        <div>
            <Menu logged_in_ok={props.logged_in_ok}/>
            <Divider/>
            <Switch>
                <Route
                    exact path='/'
                    render={(props) => <Home {...props} handleusercredentials={handleusercredentials} logged_in_ok={logged_in_ok} dbs={dbs}
                                             handleLogin={handleLogin} />}
                />
                <Route path="/about" component={About}/>
                <Route path="/signout" component={Signout}/>
            </Switch>
        </div>
    )
}

MainRouter.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleusercredentials: PropTypes.func.isRequired
}


export default MainRouter
