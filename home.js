function translate(lang) {
  translateNode(lang, document.body)
}

function translateNode(lang, node) {
  if (node.nodeType == Node.TEXT_NODE) {
    if (node.textContent.trim().length != 0) {
      let nodeId = node.getAttribute("data-hash-id");
      node.textContent = translations[nodeId][lang];
    };
  }
  node.childNodes.forEach(child => {
    translateNode(lang, child);
  });
}

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


function assignId(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    if (node.textContent.trim().length !== 0) {
      const hashedValue = hashCode(node.textContent.trim());
      node.setAttribute("data-hash-id", hashedValue);
    }
  }
  node.childNodes.forEach((child) => {
    assignId(child);
  });
}
