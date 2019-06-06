import React from "react";

describe('DBDocumentList', function() {
    it('Testing DBDocumentList component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/DBDocumentList.js')
        const DBDocumentList = temp.default

        const fD = ReactDOM.findDOMNode
        let dbDocumentList = TestUtils.renderIntoDocument(
            <DBDocumentList></DBDocumentList>
        )

        done()
    })
})