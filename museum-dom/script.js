

console.log("Просьба оценку сразу не ставить, знаю что отстаю от графика, постораюсь доделать  к сроку дедлайна по проверки задания");
// 


/*SLIDER */

let currentNum = document.querySelector('.active-number');
let currentItem = 0;/*index curent item*/
let isEnabled = true;/* flag for using animation*/
let itemsSlider = document.querySelectorAll('.item-slider');
let squaresSlider = document.querySelectorAll('.square');

/*function for change current item */
function changeCurrentItem(n) {
  currentItem = (n + itemsSlider.length) % itemsSlider.length;
}

function hideItem(direction) {
  isEnabled = false;
  itemsSlider[currentItem].classList.add(direction);
  squaresSlider[currentItem].classList.remove('active-square');
  itemsSlider[currentItem].addEventListener('animationend', function() {
    this.classList.remove('active-slider', direction);
  });
}

function showItem(direction) {
  itemsSlider[currentItem].classList.add('next-slider', direction);
  squaresSlider[currentItem].classList.add('active-square');
  currentNum.innerHTML = `0${currentItem+1}`;
  itemsSlider[currentItem].addEventListener('animationend', function() {
    this.classList.remove('next-slider', direction);
    this.classList.add('active-slider');
    isEnabled = true;
  });
}


/**create function/ */
function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

/*create events click on button*/
document.querySelector('.arrow-left').addEventListener('click', function() {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector('.arrow-right').addEventListener('click', function() {
  if (isEnabled) {
    nextItem(currentItem);
  }
});

squaresSlider.forEach( function (item, i) {
  item.addEventListener('click',() => {
    if (isEnabled) {
      if (currentItem > i) {
        nextItem(i - 1);
      } else if (currentItem < i) {
        previousItem(i + 1);
      }
    }
  });
});
