import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import PropTypes from "prop-types";

const Content = (props) => {

    return(<BrowserRouter>
        <MainRouter handleusercredentials={props.handleusercredentials} logged_in_ok={props.logged_in_ok} dbs={props.dbs}
                    handleLogin={props.handleLogin}/>
    </BrowserRouter>
    )
}

Content.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleusercredentials: PropTypes.func.isRequired
}
export default Content