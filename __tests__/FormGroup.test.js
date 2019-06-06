import React from "react";

describe('FormGroup', function() {
    it('Testing FormGroup component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/FormGroup.js')
        const FormGroup = temp.default

        const fD = ReactDOM.findDOMNode
        let formGroup = TestUtils.renderIntoDocument(
            <FormGroup></FormGroup>
        )

        done()
    })
})