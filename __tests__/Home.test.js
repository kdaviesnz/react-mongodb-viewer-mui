import React from "react";

describe('Home', function() {
    it('Testing Home component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/Home.js')
        const Home = temp.default

        const fD = ReactDOM.findDOMNode
        let home = TestUtils.renderIntoDocument(
            <Home></Home>
        )

        done()
    })
})