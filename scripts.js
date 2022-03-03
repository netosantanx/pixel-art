const colorPalette = document.getElementById('color-palette');
const clearBoard = document.getElementById('clear-board');
const pixelBoard = document.getElementById('pixel-board');

const black = document.getElementById('color1');
const darkBlue = document.getElementById('color2');
const pastelRed = document.getElementById('color3');
const beige = document.getElementById('color4');

// definir a cor preta como selecionada desde o início
function initial() {
  selectedColor = 'black';
}
window.onload = initial;

// selecionar cor na paleta
let selectedColor = null; // define variável pra armazenar cor no futuro

function preto() {
  selectedColor = 'black';

  black.classList.add('selected');
  darkBlue.classList.remove('selected');
  pastelRed.classList.remove('selected');
  beige.classList.remove('selected');
}

black.addEventListener('click', preto);
// preto

function azulEscuro() {
  selectedColor = '#2D4263';

  darkBlue.classList.add('selected');
  black.classList.remove('selected');
  pastelRed.classList.remove('selected');
  beige.classList.remove('selected');
}

darkBlue.addEventListener('click', azulEscuro);
// azul escuro

function vermelhoPastel() {
  selectedColor = '#c84b31';
  console.log(selectedColor);

  pastelRed.classList.add('selected');
  black.classList.remove('selected');
  darkBlue.classList.remove('selected');
  beige.classList.remove('selected');
}

pastelRed.addEventListener('click', vermelhoPastel);
// vermelho pastel

function bege() {
  selectedColor = '#ECDBBA';
  beige.classList.add('selected');
  black.classList.remove('selected');
  pastelRed.classList.remove('selected');
  darkBlue.classList.remove('selected');
}

beige.addEventListener('click', bege);
// bege

// pintar quadradinho da cor selecionada
let pixel1 = document.getElementById('1');
let pixel2 = document.getElementById('2');
let pixel3 = document.getElementById('3');
let pixel4 = document.getElementById('4');
let pixel5 = document.getElementById('5');
let pixel6 = document.getElementById('6');
let pixel7 = document.getElementById('7');
let pixel8 = document.getElementById('8');
let pixel9 = document.getElementById('9');
let pixel10 = document.getElementById('10');
let pixel11 = document.getElementById('11');
let pixel12 = document.getElementById('12');
let pixel13 = document.getElementById('13');
let pixel14 = document.getElementById('14');
let pixel15 = document.getElementById('15');
let pixel16 = document.getElementById('16');
let pixel17 = document.getElementById('17');
let pixel18 = document.getElementById('18');
let pixel19 = document.getElementById('19');
let pixel20 = document.getElementById('20');
let pixel21 = document.getElementById('21');
let pixel22 = document.getElementById('22');
let pixel23 = document.getElementById('23');
let pixel24 = document.getElementById('24');
let pixel25 = document.getElementById('25');

function pintar1() {
  pixel1.style.background = selectedColor;
}

pixel1.addEventListener('click', pintar1);
//1

function pintar2() {
  pixel2.style.background = selectedColor;
}

pixel2.addEventListener('click', pintar2);
//2

function pintar3() {
  pixel3.style.background = selectedColor;
}

pixel3.addEventListener('click', pintar3);
//3

function pintar4() {
  pixel4.style.background = selectedColor;
}

pixel4.addEventListener('click', pintar4);
//4

function pintar5() {
  pixel5.style.background = selectedColor;
}

pixel5.addEventListener('click', pintar5);
//5

function pintar6() {
  pixel6.style.background = selectedColor;
}

pixel6.addEventListener('click', pintar6);
//6

function pintar7() {
  pixel7.style.background = selectedColor;
}

pixel7.addEventListener('click', pintar7);
//7

function pintar8() {
  pixel8.style.background = selectedColor;
}

pixel8.addEventListener('click', pintar8);
//8

function pintar9() {
  pixel9.style.background = selectedColor;
}

pixel9.addEventListener('click', pintar9);
//9

function pintar10() {
  pixel10.style.background = selectedColor;
}

pixel10.addEventListener('click', pintar10);
//10

function pintar11() {
  pixel11.style.background = selectedColor;
}

pixel11.addEventListener('click', pintar11);
//11

function pintar12() {
  pixel12.style.background = selectedColor;
}

pixel12.addEventListener('click', pintar12);
//12

function pintar13() {
  pixel13.style.background = selectedColor;
}

pixel13.addEventListener('click', pintar13);
//13

function pintar14() {
  pixel14.style.background = selectedColor;
}

pixel14.addEventListener('click', pintar14);
//14

function pintar15() {
  pixel15.style.background = selectedColor;
}

pixel15.addEventListener('click', pintar15);
//15

function pintar16() {
  pixel16.style.background = selectedColor;
}

pixel16.addEventListener('click', pintar16);
//16

function pintar17() {
  pixel17.style.background = selectedColor;
}

pixel17.addEventListener('click', pintar17);
//17

function pintar18() {
  pixel18.style.background = selectedColor;
}

pixel18.addEventListener('click', pintar18);
//18

function pintar19() {
  pixel19.style.background = selectedColor;
}

pixel19.addEventListener('click', pintar19);
//19

function pintar20() {
  pixel20.style.background = selectedColor;
}

pixel20.addEventListener('click', pintar20);
//20

function pintar21() {
  pixel21.style.background = selectedColor;
}

pixel21.addEventListener('click', pintar21);
//21

function pintar22() {
  pixel22.style.background = selectedColor;
}

pixel22.addEventListener('click', pintar22);
//22

function pintar23() {
  pixel23.style.background = selectedColor;
}

pixel23.addEventListener('click', pintar23);
//23

function pintar24() {
  pixel24.style.background = selectedColor;
}

pixel24.addEventListener('click', pintar24);
//24

function pintar25() {
  pixel25.style.background = selectedColor;
}

pixel25.addEventListener('click', pintar25);
//25

// botão de limpar
function limpar() {
  for (index = 0; index < 25; index += 1) {
    let clear = document.querySelectorAll('.pixel')[index];
    clear.style.background = 'white';
  }
}

clearBoard.addEventListener('click', limpar);
