function translate(lang) {
  translateNode(lang, document.body)
}

function translateNode(lang, node) {
  if (node.nodeType == Node.TEXT_NODE) {
    if (node.textContent.trim().length != 0) {
      node.textContent = translations[node.id][lang];
    };
  }
  node.childNodes.forEach(child => {
    translateNode(lang, child);
  });
}

function traverse(node) {
    if (node.nodeType == Node.TEXT_NODE) {
      if (node.textContent.trim().length != 0) {
        node.textContent = "Hello";
      };
    }
    node.childNodes.forEach(child => {
      traverse(child);
    });
}

traverse(document.body);