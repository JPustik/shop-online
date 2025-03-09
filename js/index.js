// function myFunction() {
//   let name = prompt("Найдите товар");
//   if (name != null) {
//     alert('Ничего не найдено')
//   }
  
// }

function myFunction2() {
  alert('Товаров больше нет')
}


function onMouseHover(el) {
  let basketWhite = document.getElementById('basketWhite');
  let basketPink = document.getElementById('basketPink');
  
  el.style.background = '#F16D7F';
  el.style.color = 'white';

  basketPink.style.display = 'none';
  basketWhite.style.display = 'block';
}

function onMouseLeave(el) {
  let basketWhite = document.getElementById('basketWhite');
  let basketPink = document.getElementById('basketPink');

  el.style.background = '#ffffff';
  el.style.color = '#F26376';

  basketPink.style.display = 'block';
  basketWhite.style.display = 'none';
}

function onClickButton(el) {
  el.style.cssText = "width: 208px; height: 44px; font-size: 12px"
}