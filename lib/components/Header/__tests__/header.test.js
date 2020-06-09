import React from 'react'
import TestRenderer from 'react-test-renderer'

import Header from '../header'
import Navigation from '../navigation'
import Actions from '../actions'

const navClickFunction = jest.fn().mockName('Navigation click function');
const overflowClickFunction = jest.fn().mockName('Overflow click function');
const searchClickFunction = jest.fn().mockName('Search click function');

const baseProps = {
    onNavigationClick: navClickFunction,
    onOverflowClick: overflowClickFunction,
    onSearchClick: searchClickFunction
}

const Component = Header;

test('render header', () => {

    const testRenderer = TestRenderer.create(<Component {...baseProps} />)

    expect(testRenderer.toJSON()).toMatchSnapshot();

    expect(navClickFunction.mock.calls.length).toBe(0);
})

test('test navigation click', () => {

    const testRenderer = TestRenderer.create(<Component {...baseProps} />)

    const navigation = testRenderer.root.findByType(Navigation);
    navigation.findByType("button").props.onClick();

    expect(navClickFunction.mock.calls.length).toBe(1);
})

test('test search click', () => {

    const testRenderer = TestRenderer.create(<Component {...baseProps} />)

    const actions = testRenderer.root.findByType(Actions);

    actions.findAllByType("button")[0].props.onClick();

    expect(searchClickFunction.mock.calls.length).toBe(1);
})

test('test overflow click', () => {

    const testRenderer = TestRenderer.create(<Component {...baseProps} />)

    const actions = testRenderer.root.findByType(Actions);

    actions.findAllByType("button")[1].props.onClick();

    expect(overflowClickFunction.mock.calls.length).toBe(1);
})
