const inputFile = document.querySelector('input');
const fileText = document.querySelector('p');
const form = document.querySelector('form');

inputFile.addEventListener('input', (input)=> {
  fileText.textContent = "";

  const file = input.target.value
  const fileNameArray = file.split(/(\\|\/)/g)
  const fileName = fileNameArray[fileNameArray.length -1];

  fileText.textContent = `Filename: ${fileName}`
})