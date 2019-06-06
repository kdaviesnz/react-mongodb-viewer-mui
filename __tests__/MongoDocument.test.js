import React from "react";

describe('MongoDocument', function() {
    it('Testing MongoDocument component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/MongoDocument.js')
        const MongoDocument = temp.default

        const fD = ReactDOM.findDOMNode
        let mongoDocument = TestUtils.renderIntoDocument(
            <MongoDocument></MongoDocument>
        )

        done()
    })
})