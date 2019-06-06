import React from "react";

describe('About', function() {
    it('Testing About component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/About.js')
        const About = temp.default

        const fD = ReactDOM.findDOMNode
        let about = TestUtils.renderIntoDocument(
            <About></About>
        )

        done()
    })
})