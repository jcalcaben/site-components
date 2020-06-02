import React, { useEffect } from 'react';
import TestRenderer, { act } from 'react-test-renderer'

import App from '../app'

test('render app', ()=>{
    const Component = App;

    const testRenderer = TestRenderer.create(<Component><span>Content</span></Component>)

    expect(testRenderer.toJSON()).toMatchSnapshot();
})