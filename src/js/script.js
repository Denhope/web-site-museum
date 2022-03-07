/*SLIDER */

let currentNum = document.querySelector('.active-number');
let currentItem = 0; /*index curent item*/
let isEnabled = true; /* flag for using animation*/
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
  itemsSlider[currentItem].addEventListener('animationend', function () {
    this.classList.remove('active-slider', direction);
  });
}

function showItem(direction) {
  itemsSlider[currentItem].classList.add('next-slider', direction);
  squaresSlider[currentItem].classList.add('active-square');
  currentNum.innerHTML = `0${currentItem + 1}`;
  itemsSlider[currentItem].addEventListener('animationend', function () {
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
document.querySelector('.arrow-left').addEventListener('click', function () {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector('.arrow-right').addEventListener('click', function () {
  if (isEnabled) {
    nextItem(currentItem);
  }
});

squaresSlider.forEach(function (item, i) {
  item.addEventListener('click', () => {
    if (isEnabled) {
      if (currentItem > i) {
        nextItem(i - 1);
      } else if (currentItem < i) {
        previousItem(i + 1);
      }
    }
  });
});

const swipedetect = (el) => {
  let surface = el;
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;
  let startTime = 0;
  let elapsedTime = 0;

  let threshold = 150;
  let restraint = 100;
  let allowedTime = 1000;

  surface.addEventListener('mousedown', function (e) {
    startX = e.pageX;
    startY = e.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  });

  surface.addEventListener('mouseup', function (e) {
    distX = e.pageX - startX;
    distY = e.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if (distX > 0) {
          if (isEnabled) {
            previousItem(currentItem);
          }
        } else {
          if (isEnabled) {
            nextItem(currentItem);
          }
        }
      }
    }
    e.preventDefault();
  });
};

let el = document.querySelector('.slider-container');
swipedetect(el);

/*MAP */

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGVuaG9wZSIsImEiOiJja3VwdDZodmgwZ3hlMnFwNW1wNjd0NWU5In0.A1HSCRxp2ePoAfJhA91CYA';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [2.3364, 48.86091],
  zoom: 16,
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker({
  color: 'black',
})
  .setLngLat([2.3364, 48.86091])
  .addTo(map);
new mapboxgl.Marker({
  color: 'gray',
})
  .setLngLat([2.3333, 48.8602])
  .addTo(map);
new mapboxgl.Marker({
  color: 'gray',
})
  .setLngLat([2.3397, 48.8607])
  .addTo(map);
new mapboxgl.Marker({
  color: 'gray',
})
  .setLngLat([2.333, 48.8619])
  .addTo(map);
new mapboxgl.Marker({
  color: 'gray',
})
  .setLngLat([2.3365, 48.8625])
  .addTo(map);

/*VIDEO-slider */
