import React from "react";

describe('Button', function() {
    it('Testing Button component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/Button.js')
        const Button = temp.default

        const fD = ReactDOM.findDOMNode
        let button = TestUtils.renderIntoDocument(
            <Button></Button>
        )

        done()
    })
})