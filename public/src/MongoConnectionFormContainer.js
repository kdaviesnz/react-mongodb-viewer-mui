import React from 'react'
import MongoConnectionForm from './MongoConnectionForm'
import PropTypes from "prop-types";

const MongoConnectionFormContainer = (props) => {
    return (
        <MongoConnectionForm handleusercredentials={props.handleusercredentials} handleLogin={props.handleLogin}/>
    )
}

MongoConnectionFormContainer.propTypes = {
    handleLogin: PropTypes.func,
    handleusercredentials: PropTypes.func
}

export default MongoConnectionFormContainer

