import React from "react";

describe('Menu', function() {
    it('Testing Menu component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/Menu.js')
        const Menu = temp.default

        const fD = ReactDOM.findDOMNode

        done()
    })
})