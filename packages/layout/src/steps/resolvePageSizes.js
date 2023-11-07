import { flatten } from '@react-pdf/stylesheet';
import getPageSize from '../page/getSize';

/**
 * Resolves page size
 *
 * @param {Object} page
 * @returns {Object} page with resolved size in style attribute
 */
export const resolvePageSize = page => {
  const size = getPageSize(page);
  const style = flatten(page.style || {});

  return { ...page, style: { ...style, ...size } };
};

/**
 * Resolves page sizes
 *
 * @param {Object} document root
 * @returns {Object} document root with resolved page sizes
 */
const resolvePageSizes = (root, undefined, currentPageCallBack) => {
  if (!root.children) return root;

  const children = root.children.map(resolvePageSize);
  if(currentPageCallBack){
    currentPageCallBack("Page Sizes Resolved!")
  }  
  return Object.assign({}, root, { children });
};

export default resolvePageSizes;
