import React from "react";

describe('Content', function() {
    it('Testing Content component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/Content.js')
        const Content = temp.default

        const fD = ReactDOM.findDOMNode
        let content = TestUtils.renderIntoDocument(
            <Content></Content>
        )

        done()
    })
})