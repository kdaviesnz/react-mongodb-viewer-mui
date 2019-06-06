import React from "react";

describe('DBName', function() {
    it('Testing DBName component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/DBName.js')
        const DBName = temp.default

        const fD = ReactDOM.findDOMNode
        let dbName = TestUtils.renderIntoDocument(
            <DBName></DBName>
        )

        done()
    })
})