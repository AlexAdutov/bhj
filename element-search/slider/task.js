const sliderItems = document.querySelectorAll('.slider__item');
const sliderArrows = document.querySelectorAll('.slider__arrow');
const sliderDots = document.querySelectorAll('.slider__dot');
let currentIndex = 0;


function setActiveSlide(index) {
    sliderItems.forEach(item => item.classList.remove('slider__item_active'));
    sliderDots.forEach(dot => dot.classList.remove('slider__dot_active'));

    sliderItems[index].classList.add('slider__item_active');
    sliderDots[index].classList.add('slider__dot_active');
}

sliderArrows.forEach(arrow =>{
    arrow.addEventListener('click', function(){
        if (this.classList.contains('slider__arrow_prev')){
            currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        } else if (this.classList.contains('slider__arrow_next')) {
            currentIndex =(currentIndex +1)% sliderItems.length
        }

        setActiveSlide(currentIndex);
    });
});

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', function(){
        currentIndex=index;
        setActiveSlide(currentIndex);
    });
});

//console.log(sliderItems, sliderDots, sliderArrows, currentIndex)