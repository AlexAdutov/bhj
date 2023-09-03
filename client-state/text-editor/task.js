const text =document.querySelector('#editor');
const btn = document.querySelector('#btn');
let lastItem = localStorage.getItem('text');
text.value = lastItem;

function setter(value) {
    localStorage.setItem('text', `${value}`);
}

text.addEventListener('keydown', () => {
    setter(text.value);
})

btn.addEventListener('click', ()=>{
    localStorage.removeItem('text');
    text.value='';
})