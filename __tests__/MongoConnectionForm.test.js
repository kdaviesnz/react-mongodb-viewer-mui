import React from "react";

describe('MongoConnectionForm', function() {
    it('Testing MongoConnectionForm component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/MongoConnectionForm.js')
        const MongoConnectionForm = temp.default

        const fD = ReactDOM.findDOMNode
        let mongoConnectionForm = TestUtils.renderIntoDocument(
            <MongoConnectionForm></MongoConnectionForm>
        )

        done()
    })
})