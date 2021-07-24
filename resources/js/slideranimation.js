const leftarrow = document.querySelector('.left-arrow');
const rightarrow = document.querySelector('.right-arrow');
const slider = document.querySelector('.carousel__slider');

var cardIndex;
var sidenum;


rightarrow.addEventListener('click', function () {
    cardIndex = document.querySelector('input[name="slide"]:checked').value;
    if (cardIndex < 3) {
        cardIndex++;
    }
    else {
        cardIndex = 1;
    }
    slidenum = 'slide' + cardIndex;
    document.getElementById(slidenum).checked = true;
});

leftarrow.addEventListener('click', function () {
    cardIndex = document.querySelector('input[name="slide"]:checked').value;
    if (cardIndex > 1) {
        cardIndex--;
    }
    else {
        cardIndex = 3;
    }
    slidenum = 'slide' + cardIndex;
    document.getElementById(slidenum).checked = true;
});

