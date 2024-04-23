const translationJS = `function translate(lang) {
  translateNode(lang, document.body)
}

function translateNode(lang, node) {
  if (node.nodeType == Node.TEXT_NODE) {
    if (node.textContent.trim().length != 0) {
      let nodeId = node.parentElement.getAttribute("data-hash-id");
      translationItem = translations[nodeId];
      if(translationItem !== undefined) {
        node.textContent = translationItem[lang];
      } else {
        console.log(node.textContent);
      }
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
      node.parentElement.setAttribute("data-hash-id", hashedValue);
    }
  }
  node.childNodes.forEach((child) => {
    assignId(child);
  });
}

document.body.onload = (() => assignId(document.body))`

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
  const headers = parseCSVRow(lines[0]); // Use parseCSVRow for headers as well
  const data = {};

  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '') {
      continue; // Skip empty lines
    }

    const values = parseCSVRow(lines[i]);
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

// This function parses a single CSV row, considering quotes and commas
function parseCSVRow(row) {
  const result = [];
  let insideQuotes = false;
  let currentField = '';

  for (let i = 0; i < row.length; i++) {
    const char = row[i];

    if (char === '"') {
      // Toggle the insideQuotes flag
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      // If we encounter a comma outside of quotes, it indicates a new field
      result.push(currentField.trim());
      currentField = '';
    } else {
      currentField += char; // Continue building the field
    }
  }

  // Push the last field into the result
  result.push(currentField.trim());

  return result;
}


function displayData(data) {
  const outputDiv = document.getElementById('output');
  const jsonData = JSON.stringify(data, null, 2);
  outputDiv.innerHTML = '<pre>const translations = ' + jsonData + '\n' + translationJS + '</pre>';

  // Add a button to download the translations as a file
  const downloadButton = document.createElement('button');
  downloadButton.innerText = 'Download Translations';
  downloadButton.addEventListener('click', () => {
    const blob = new Blob([`const translations = ${jsonData}\n${translationJS}`], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'translations.js'; // You can change this to .txt if needed
    a.click();
    URL.revokeObjectURL(url);
  });

  outputDiv.appendChild(downloadButton); // Add the download button to the output div
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
