const translationJS = `function translate(lang) {
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
}`

function processCSV() {
  var csvInputElement = document.createElement('input');
  csvInputElement.type = 'file';
  csvInputElement.accept = '.csv';
  csvInputElement.id = 'csv';
  csvInputElement.addEventListener('change', handleFileSelect);

  var divOutput = document.createElement('div')
  divOutput.id = 'output'
  document.body.appendChild(csvInputElement);
  document.body.appendChild(divOutput);
}

function handleFileSelect(event) {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    const csvData = event.target.result;
    const parsedData = parseCSV(csvData);
    displayData(parsedData);
  }
  reader.readAsText(file);
}

function parseCSV(csvData) {
  const lines = csvData.split(/\r?\n/);
  const headers = lines[0].split(', ');
  const data = {};

  for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(', ');
      if (values.length === headers.length) {
          const entry = {};
          for (let j = 0; j < headers.length; j++) {
              entry[headers[j]] = values[j];
          }
          data[hashCode(entry[headers[0]])] = entry;
      }
  }

  return data;
}

function displayData(data) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '<pre>const translations = ' + JSON.stringify(data, null, 2) + '\n' + translationJS + '</pre>';
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
