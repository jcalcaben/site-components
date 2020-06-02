import React, { useEffect } from 'react';
import AppContextProvider, { useAppContext } from '../app'

import TestRenderer, { act } from 'react-test-renderer'

const log = jest.fn();

const Consumer = jest.fn(() => {
    const contextValues = useAppContext();

    useEffect(() => {
        log(contextValues)
    }, [contextValues])

    return <span />
})

test('render children', () => {
    const Component = AppContextProvider;

    const testRenderer = TestRenderer.create(<Component><span>Test</span></Component>)

    expect(testRenderer.toJSON()).toMatchSnapshot();
})

test('provide values to consumer', () => {
    const Component = AppContextProvider;

    let testRenderer;

    act(() => {
        testRenderer = TestRenderer.create(
            <Component><Consumer /></Component>
        );
    });

    expect(log).toHaveBeenCalledTimes(1);

    expect(log).toHaveBeenNthCalledWith(1, [expect.objectContaining({
        "activePanel": undefined
    }), {}]);

})