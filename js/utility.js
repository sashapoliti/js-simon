function createBox(content) {
  const box = document.createElement('div');
  box.classList.add('box', 'd-flex', 'justify-content-center', 'align-items-center');
  box.innerHTML = `<span>${content}</span>`
  return box;
}

function generateArrayOfUniqueRandomNumber(min, max, array, arrayLength) {
  for (let i = 0; i < arrayLength; i++) {
    array.push(generateUniqueRandomNumber(min, max, array));
  }

  return array;
}

function generateUniqueRandomNumber(min, max, blacklist) {
  let isFound = false;
  let uniqueRandomNumber;

   while (!isFound) {
    uniqueRandomNumber = getRndInteger(min, max);
    if (!blacklist.includes(uniqueRandomNumber)) {
      isFound = true;
    }
   }

   return uniqueRandomNumber;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }