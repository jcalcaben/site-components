import React, { useEffect } from 'react'
import TestRenderer, { act } from 'react-test-renderer';
import NavigationTreeContextProvider, { useNavigationTreeContext } from '../navigationTree'

const log = jest.fn();

const Consumer = jest.fn((props) => {
    const { logger, section } = props;

    const [state, api] = useNavigationTreeContext();

    const { openSections } = state;

    const { openSection } = api;

    useEffect(() => {
        openSection(section)
    })

    const clickAction = () => {
        logger(openSections);
    }

    return (<button type="button" onClick={clickAction}>Test</button>);
})

test("add top level section", () => {
    const Component = NavigationTreeContextProvider;

    const data = {
        title: "Title",
        pages: [
            {
                label: "Section 1",
                url: "section-1"
            },
            {
                label: "Section 2",
                url: "section-2"
            },
            {
                label: "Section 3",
                url: "section-3"
            }
        ]
    }

    let result;

    act(() => {
        result = TestRenderer.create(
          <Component data={data}>
            <Consumer logger={log} section='section-1' />
          </Component>
        )
    })

    result.root.findByType('button').props.onClick()

    expect(log).toHaveBeenCalledWith(['section-1'])
})