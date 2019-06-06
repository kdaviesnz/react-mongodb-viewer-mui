import React from "react";

describe('Footer', function() {
    it('Testing Footer component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/Footer.js')
        const Footer = temp.default

        const fD = ReactDOM.findDOMNode
        let footer = TestUtils.renderIntoDocument(
            <Footer></Footer>
        )

        done()
    })
})