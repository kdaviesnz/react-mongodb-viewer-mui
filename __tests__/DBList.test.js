import React from "react";

describe('DBList', function() {
    it('Testing DBList component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/DBList.js')
        const DBList = temp.default

        const fD = ReactDOM.findDOMNode
        let dbList = TestUtils.renderIntoDocument(
            <DBList></DBList>
        )

        done()
    })
})