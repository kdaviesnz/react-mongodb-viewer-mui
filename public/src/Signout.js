import React, {Component} from 'react'

const Signout = ()=> {
    sessionStorage.removeItem('mongo')
    document.location.href = "/"
}

export default Signout
