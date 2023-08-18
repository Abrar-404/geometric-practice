function calculateTriangleArea() {
  const baseField = document.getElementById('triangle-base');
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);

  const heightField = document.getElementById('triangle-height');
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);

  // validate input------------
  
  if (isNaN(base) || isNaN(height)) {
    alert('Please insert a number');
    return;
  }

  const area = 0.5 * base * height;
  
  const areaSpan = document.getElementById('triangle-area');
  areaSpan.innerText = area;
  
   addToCalculationEntry('Triangle', area);
}

function calculateRectangleArea() {
  const widthField = document.getElementById('rectangle-width');
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);

const lengthField = document.getElementById('rectangle-length');
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);
  
// validate input------------
  
  if (isNaN(width) || isNaN(length)) {
    alert('Please insert a number');
    return;
  }

  const area = width * length;

  const rectAreaSpan = document.getElementById('rectangle-area');
  rectAreaSpan.innerText = area;

   addToCalculationEntry('Rectangle', area);
}


function calculateParallelogramArea() {
  const base = getInputValue('parallelogram-base');

  const height = getInputValue('parallelogram-height');

  const area = base * height;

  // validate input------------
  
  if (isNaN(base) || isNaN(height)) {
    alert('Please insert a number');
    return;
  }

  setElementInnerText('parallelogram-area', area);

  addToCalculationEntry('parallelogram', area);
}

function calculateEllipseArea() {
  const major = getInputValue('ellipse-radius1');

  const minor = getInputValue('ellipse-radius2');

  // validate input------------
  
  if (isNaN(major) || isNaN(minor)) {
    alert('Please insert a number');
    return;
  }

  const area = 3.1416 * major * minor;

  const areaTwoDecimal = area.toFixed(2);

  setElementInnerText('ellipse-area', areaTwoDecimal);

  addToCalculationEntry('Ellipse', areaTwoDecimal);
}
// reusable functions-------------------------------------

// value field function-----------
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}


// reusable set-------------------------------------------

function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId)
  element.innerText = area;
}


// add to calculation entry----------------------------------------

function addToCalculationEntry(areaType, area) {
  const calculationEntry = document.getElementById('calculation-entry');

  const count = calculationEntry.childElementCount;

  const para = document.createElement('p');
  para.classList.add('my-4');
  para.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class = "btn btn-success btn-small">Convert</button>`;

  calculationEntry.appendChild(para);
}