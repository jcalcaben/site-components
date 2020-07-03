import React, { useEffect } from "react";
import TestRenderer, { act } from "react-test-renderer";
import NavigationTreeContextProvider, {
  useNavigationTreeContext,
} from "../navigationTree";

const Component = NavigationTreeContextProvider;

const data = {
  title: "Title",
  pages: [
    {
      label: "Section 1",
      url: "section-1",
      pages: [
        {
          label: "Section 1.1",
          url: "section-1-1",
          pages: [
            {
              label: "Section 1.1.1",
              url: "section-1-1-1",
            },
          ],
        },
        {
          label: "Section 1.2",
          url: "section-1-2",
        },
      ],
    },
    {
      label: "Section 2",
      url: "section-2",
    },
    {
      label: "Section 3",
      url: "section-3",
    },
  ],
};

const Consumer = jest.fn((props) => {
  const { logger, initOpen, clickOpen } = props;

  const [state, api] = useNavigationTreeContext();

  const { openSections } = state;

  const { openSection } = api;

  useEffect(() => {
    openSection(initOpen);
  }, []);

  const logClickAction = () => {
    logger(openSections);
  };

  const openClickAction = () => {
    openSection(clickOpen);
  };

  return (
    <>
      <button id="log" type="button" onClick={logClickAction}>
        Test
      </button>
      <button id="open" type="button" onClick={openClickAction}>
        Open
      </button>
    </>
  );
});

test("add top level section", () => {
  const log = jest.fn();

  let result;

  act(() => {
    result = TestRenderer.create(
      <Component data={data}>
        <Consumer logger={log} initOpen="section-1" />
      </Component>
    );
  });

  result.root.findByProps({ id: "log" }).props.onClick();

  const expected = [
    {
      label: "Section 1",
      url: "section-1",
    },
  ];

  expect(log).toHaveBeenCalledWith(expected);
});

test("add second level section", () => {
  const log = jest.fn();

  let result;

  act(() => {
    result = TestRenderer.create(
      <Component data={data}>
        <Consumer logger={log} initOpen="section-1-1" />
      </Component>
    );
  });

  result.root.findByProps({ id: "log" }).props.onClick();

  const expected = [
    {
      label: "Section 1",
      url: "section-1",
    },
    {
      label: "Section 1.1",
      url: "section-1-1",
    },
  ];

  expect(log).toHaveBeenCalledWith(expected);
});

test("parent section already open", () => {
  const log = jest.fn();

  let result;

  act(() => {
    result = TestRenderer.create(
      <Component data={data}>
        <Consumer logger={log} initOpen="section-1-1" clickOpen="section-1-2" />
      </Component>
    );
  });

  act(() => {
    result.root.findByProps({ id: "open" }).props.onClick();
  });

  result.root.findByProps({ id: "log" }).props.onClick();

  const expected = [
    {
      label: "Section 1.2",
      url: "section-1-2",
    },
    {
      label: "Section 1",
      url: "section-1",
    },
    {
      label: "Section 1.1",
      url: "section-1-1",
    },
  ];

  expect(log).toHaveBeenCalledWith(expected);
});
