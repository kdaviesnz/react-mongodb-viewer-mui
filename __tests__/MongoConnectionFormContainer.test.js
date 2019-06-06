import React from "react";

describe('MongoConnectionFormContainer', function() {
    it('Testing MongoConnectionFormContainer component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/MongoConnectionFormContainer.js')
        const MongoConnectionFormContainer = temp.default

        const fD = ReactDOM.findDOMNode
        let mongoConnectionFormContainer = TestUtils.renderIntoDocument(
            <MongoConnectionFormContainer></MongoConnectionFormContainer>
        )

        done()
    })
})