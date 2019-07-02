import React from 'react';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import GridLayout from 'react-grid-layout';

const styleA = { 'background-color': 'red'};
const styleB = { 'background-color': 'blue'};
const styleC = { 'background-color': 'green'};

const Layout = () => {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
        {i: 'a', x: 0, y: 0, w: 1, h: 2, static: false},
        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
            <div key="a" style={styleA} >a</div>
            <div key="b" style={styleB} >b</div>
            <div key="c" style={styleC} >c</div>
        </GridLayout>
    );
};
export default Layout;