import React from "react";

describe('MainRouter', function() {
    it('Testing MainRouter component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/MainRouter.js')
        const MainRouter = temp.default

        const fD = ReactDOM.findDOMNode

        done()
    })
})