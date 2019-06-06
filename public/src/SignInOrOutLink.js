import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from "prop-types";

const SignInOrOutLink = (props) => {
    if (props.logged_in_ok) {
        return (
            <Link to="/signout">
                Sign out
            </Link>
        )
    } else {
        return (
            <Link to="/">
                Sign in
            </Link>
        )
    }
}

SignInOrOutLink.propTypes = {
    logged_in_ok: PropTypes.bool.isRequired
}


export default SignInOrOutLink
