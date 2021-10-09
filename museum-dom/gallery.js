const pictureInnerContainer = document.querySelector('.picture-inner-container');

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}


const pictureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

shuffle(pictureArray);


for (let i = 0; i < 15; i++) {
    let img = document.createElement('img');
    img.classList.add('gallery-img');
    if (i === 0 || i === 10) {
        img.classList.add('gallery-margin');
    }
    img.src = `assets/img/gallery/galery${pictureArray[i]}.jpeg`;
    img.alt = `galery${pictureArray[i]}`;
    pictureInnerContainer.append(img);
}
