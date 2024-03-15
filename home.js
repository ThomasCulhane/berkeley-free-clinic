function traverse(node) {
  if (node.nodeType == Node.TEXT_NODE) {
    if (node.textContent.trim().length != 0) {
      node.textContent = "Hello";
    }
  }
  node.childNodes.forEach((child) => {
    traverse(child);
  });
}

traverse(document.body);

function hashCode(str) {
  let hash = 0;
  if (str.length === 0) {
    return hash;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}
function assignid(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    if (node.textContent.trim().length !== 0) {
      const hashedValue = hashCode(node.textContent.trim());
      node.setAttribute("data-hash-id", hashedValue);
    }
  }
  node.childNodes.forEach((child) => {
    assignid(child);
  });
}
