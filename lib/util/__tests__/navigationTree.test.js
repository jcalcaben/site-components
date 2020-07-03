import { getPath } from "../navigationTree";

const data = [
  {
    label: "Section-1",
    url: "section-1",
  },
  {
    label: "Section-2",
    url: "section-2",
    pages: [
      {
        label: "Section-2-1",
        url: "section-2-1",
      },
      {
        label: "Section-2-2",
        url: "section-2-2",
      },
      {
        label: "Section-2-3",
        pages: [
          {
            label: "Section-2-3-1",
            url: "section-2-3-1",
          },
          {
            label: "Section-2-3-2",
            url: "section-2-3-2",
          },
        ],
      },
    ],
  },
  {
    label: "Section-3",
    pages: [
      {
        label: "Section-3-1",
        url: "section-3-1",
      },
    ],
  },
];

test("entry not found", () => {
  const result = getPath(data, "foo");

  expect(result).toEqual([]);
});

test("top level entry", () => {
  const result = getPath(data, "section-1");

  expect(result).toMatchSnapshot();
});

test("second level entry", () => {
  const result = getPath(data, "section-2-2");

  expect(result).toMatchSnapshot();
});

test("third level entry", () => {
  const result = getPath(data, "section-2-3-2");

  expect(result).toMatchSnapshot();
});

test("no url in parent", () => {
  const result = getPath(data, "section-3-1");

  expect(result).toMatchSnapshot();
});
