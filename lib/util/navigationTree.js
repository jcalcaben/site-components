/**
 * A node representing an entry in a navigation tree
 *
 * @typedef NavigationTreeNode
 *
 * @property {string} label Label to render
 * @property {string} url The url to navigate to when clicked
 * @property {NavigationTreeNode[]} pages Child pages of the node
 */

/**
 *
 * @param {NavigationTreeNode[]} tree An array of tree-like objects
 * @param {NavigationTreeNode} target Target navigation tree node
 *
 * @returns {Object[]} An array of objects containing the url and label
 * for the target and its parents in the tree
 */
export const getPath = (tree, target) => {
  let result = [];
  if (tree) {
    tree.forEach((element) => {
      const { label, url, pages } = element;
      if (url === target) {
        result.push({ label, url });
      } else if (pages) {
        const childrenResults = getPath(pages, target);
        if (childrenResults.length > 0) {
          result = result.concat([{ label, url }], childrenResults);
        }
      }
    });
  }
  return result;
};

export default {};
