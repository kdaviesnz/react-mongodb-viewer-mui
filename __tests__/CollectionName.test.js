import React from "react";

describe('CollectionName', function() {
    it('Testing CollectionName component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/CollectionName.js')
        const CollectionName = temp.default

        const fD = ReactDOM.findDOMNode
        let collectionName = TestUtils.renderIntoDocument(
            <CollectionName></CollectionName>
        )

        done()
    })
})