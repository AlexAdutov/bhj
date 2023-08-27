const chatWidget = document.querySelector('.chat-widget');
const chatMessages = document.querySelector('.chat-widget__messages');
const inputMessage = document.getElementById('chat-widget__input');

chatWidget.onclick = function () {
    chatWidget.classList.add('chat-widget_active');
}

const robotAnswers = [
    'Связь прерывается!',
    'Вы кто?',
    'Вы ошиблись номером!',
    'К сожалению, все операторы сейчас заняты!',
    'Перезвоните позже!',
    'Ваш звонок нам совершенно не важен!',
    'Не оставайтесь на линии!',
];

function postMessage() {
    const time = new Date().getHours() + ":" + new Date().getMinutes();
    chatMessages.innerHTML =
        chatMessages.innerHTML +
        `<div class="message message_client"><div class="message__time">` +
        time +
        `</div><div class="message__text">` +
        inputMessage.value +
        `</div></div> `;
    inputMessage.value = '';
}

function keyHandler(event) {
    console.log(event)
    if ((event.key === 'Enter') && (inputMessage.value.length > 0)) {
        postMessage();
        chatMessages.scrollIntoView({block: "end"});
        robotMessage();
        chatMessages.scrollIntoView({block: "end"});
    }
}

function robotMessage() {
    const robotAnswer = robotAnswers[Math.floor(Math.random() * robotAnswers.length)];
    const time = new Date().getHours() + ":" + new Date().getMinutes();
    chatMessages.innerHTML =
    chatMessages.innerHTML +
        `<div class="message"><div class="message__time">` +
        time +
        `</div><div class="message__text">` +
        robotAnswer +
        `</div></div> `;
}

inputMessage.addEventListener('keypress', keyHandler);

