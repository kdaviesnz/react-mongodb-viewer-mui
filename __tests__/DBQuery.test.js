import React from "react";

describe('DBQuery', function() {
    it('Testing DBQuery component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/DBQuery.js')
        const DBQuery = temp.default

        const fD = ReactDOM.findDOMNode
        let dbQuery = TestUtils.renderIntoDocument(
            <DBQuery></DBQuery>
        )

        done()
    })
})