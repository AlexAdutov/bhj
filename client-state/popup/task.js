const modal = document.getElementById('subscribe-modal');
const close = document.querySelector('.modal__close');
console.log(close)

const cookie = function() {
    const cookies = document.cookie.split(';'); 
    for (const cookie of cookies) {
        const parts = cookie.split('=');
        const name = parts[0].trim();
        const value = parts[1] ? parts[1].trim() : '';
        if (name === 'clickClose' && value === 'true') {
            return false; 
        }
    }
    return true; 
};

if (cookie()) {
    modal.classList.add('modal_active');
}

close.addEventListener('click', ()=>{
    if (cookie()) {
        modal.classList.remove('modal_active');
        document.cookie = 'clickClose=true; expres=Fri';// SameSite=None';
    }
})