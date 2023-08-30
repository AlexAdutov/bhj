function scrollHandler(){
    const reveals = Array.from(document.getElementsByClassName('reveal'))
    reveals.forEach(elem =>{
        //console.log(elem)
        const elemTop = elem.getBoundingClientRect().top;
        //console.log(elemTop)
        const viewportHeight = window.innerHeight;
        //console.log(viewportHeight)
        if (elemTop <= viewportHeight / 2) {
            elem.classList.add('reveal_active');
        }
    })
}

//scrollHandler();
window.addEventListener('scroll', scrollHandler);