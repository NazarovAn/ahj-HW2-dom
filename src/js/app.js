const fields = [...document.getElementsByClassName('field')];
const goblinEl = document.createElement('img');
goblinEl.src = 'goblin.png';
goblinEl.className = 'img';

export default function getRandomInt(min, max) {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
}

setInterval(() => {
  let fieldNumber = getRandomInt(0, 3);
  let nextField = fields[fieldNumber];

  if (nextField.contains(goblinEl)) {
    const fieldIndex = fields.indexOf(nextField);
    while (fieldNumber === fieldIndex) {
      fieldNumber = getRandomInt(0, 3);
    }
    nextField = fields[fieldNumber];
  }

  nextField.appendChild(goblinEl);
}, 2000);
