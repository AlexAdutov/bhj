const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
signin.classList.add('signin_active');
const welcome = document.getElementById('welcome');
const localId = localStorage.getItem('id');
const userID = document.getElementById('user_id');
const input = document.querySelectorAll('input');

const logOut = document.getElementById('logout__btn')

formId.addEventListener('submit', (e)=>{
    const formData = new FormData(formID);
    const request = new XMLHttpRequest();
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    request.addEventListener('readystatechange', () => {
        if(this.readyState == request.DONE && this.status == 200) {
            const data = JSON.parse(this.responseText);
            input.forEach(el=>{
                el.value = '';
            });
            if (data.success === true) {
                welcome.classList.add('welcome_active');
                localStorage.setItem('id', data.user_id);
                userID.textContent = `${data.user_id}`;

                logOut.classList.add('logout__active');
            } else{
                alert('Неправильнвй пароль')
            }
        }
    })
    request.send(formData);
    e.preventDefault();
})

logOut.addEventListener('click', (e)=>{
    e.preventDefault();
    welcome.classList.remove('welcome_active');
    localStorage.removeItem('id');
    logOut.classList.toggle('logout__active');
})

function valid () {
    if(localId) {
        welcome.classList.add('welcome_active');
        logOut.classList.add('logout__active');
        userID.textContent = localId;
    } else {
        logOut.classList.remove('logout__active');
    }
}

document.addEventListener('DOMContentLoaded', valid);