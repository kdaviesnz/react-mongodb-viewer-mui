import React from "react";

describe('DocumentLink', function() {
    it('Testing DocumentLink component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/DocumentLink.js')
        const DocumentLink = temp.default

        const fD = ReactDOM.findDOMNode
        let documentLink = TestUtils.renderIntoDocument(
            <DocumentLink></DocumentLink>
        )

        done()
    })
})