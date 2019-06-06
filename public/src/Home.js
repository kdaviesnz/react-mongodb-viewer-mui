import React, {Component} from 'react'
import MongoDBManagementContainer from "./MongoDBManagementContainer"
import PropTypes from "prop-types";

const Home = (props) => {

        return (
            <MongoDBManagementContainer handleusercredentials={props.handleusercredentials} logged_in_ok={props.logged_in_ok} dbs={props.dbs}
                                        handleLogin={props.handleLogin}/>
        )

}

Home.propTypes = {
        handleLogin: PropTypes.func.isRequired,
        handleusercredentials: PropTypes.func.isRequired
}

export default Home
