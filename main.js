const animalArray = [
  {
    image: 'https://i.ibb.co/FYK66W7/photo-1566114085547-82fa7f4b5933-ixlib-rb-1-2.jpg',
    name: 'Charlie',
    color: 'American Pearl',
    specialSkill: "Massive Fluff",
    typeOfPet: 'DOGO',
  },
  {
    image:'https://i.ibb.co/HrvP4qq/photo-1514888286974-6c03e2ca1dba-ixlib-rb-1-2.jpg' ,
    name: 'Rusty',
    color: '35mm Film Colorette',
    specialSkill: 'Smoldering',
    typeOfPet: 'CATO' ,
  },
  {
    image:'https://i.ibb.co/YfVFjYJ/photo-1552053831-71594a27632d-ixlib-rb-1-2.jpg' ,
    name: 'Onnie',
    color: 'Crispy Chicken Gold',
    specialSkill: 'Bringing flowers to your date ;)' ,
    typeOfPet:  'DOGO',
  },
  {
    image: 'https://i.ibb.co/ByQNR1m/photo-1504450874802-0ba2bcd9b5ae-ixlib-rb-1-2.jpg',
    name: 'Gortich',
    color: 'Polite Green',
    specialSkill: 'Blending in with money duh',
    typeOfPet: 'LIZZO' ,
  },
  {
    image: 'https://i.ibb.co/xYH3Ghz/photo-1526336024174-e58f5cdd8e13-ixlib-rb-1-2.jpg',
    name: 'Feebee',
    color: 'Mystical Pearl',
    specialSkill: "Butterfly Whisperer",
    typeOfPet: 'CATO' ,
  },
]
const printToDom = (selector, textToPrint) => {
  console.log('in printToDom', selector , textToPrint)
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}
const animalCards = (obj) => {
  let domString = '';
  for (let i = 0;i < obj.length; i++){
    domString += `<div class="${obj[i].typeOfPet} petCards">`;
    domString += `<img src="${obj[i].image}" alt="${obj[i].name}">`;
    domString += `<h3>Name:${obj[i].name}</h3>`;
    domString += `<h3>Color:${obj[i].color}</h3>`;
    domString += `<h3>Special Skill:<br>${obj[i].specialSkill}</h3>`;
    domString += `<h3 class="${obj[i].typeOfPet}Color">${obj[i].typeOfPet}</h3>`;
    domString += '</div>';
  }
  printToDom('#animals', domString)
}


// const btnClick = (e) => {

// }
// document.getElementById("all").addEventListener("click", btnClick);
// document.getElementById("dog").addEventListener("click", btnClick);
// document.getElementById("cat").addEventListener("click", btnClick);
// document.getElementById("liz").addEventListener("click", btnClick);

const init = () => {
  animalCards(animalArray);
}
init()
