export const E = ({ tag, child, restAttr = {}, ...rest }) => {
  const element = document.createElement(tag);

  for (const key in rest) {
    element[key] = rest[key];
  }

  for (const key in restAttr) {
    element.setAttribute(key, restAttr[key]);
  }

  if (child)
    Array.isArray(child) ? element.append(...child) : element.append(child);

  return element;
};
