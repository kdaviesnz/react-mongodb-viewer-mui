import React from "react";

describe('DBCollectionList', function() {
    it('Testing DBCollectionList component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/DBCollectionList.js')
        const DBCollectionList = temp.default

        const fD = ReactDOM.findDOMNode
        let dbCollectionList = TestUtils.renderIntoDocument(
            <DBCollectionList></DBCollectionList>
        )

        done()
    })
})