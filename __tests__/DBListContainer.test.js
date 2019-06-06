import React from "react";

describe('DBListContainer', function() {
    it('Testing DBListContainer component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/DBListContainer.js')
        const DBListContainer = temp.default

        const fD = ReactDOM.findDOMNode
        let dbListContainer = TestUtils.renderIntoDocument(
            <DBListContainer></DBListContainer>
        )

        done()
    })
})