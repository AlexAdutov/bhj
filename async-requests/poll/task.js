const pollTitle = document.getElementById('poll__title');
const pollAnswer = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        pollTitle.innerText = data.data.title;
        let id = data.id;

        const answers = data.data.answers;
        answers.forEach((el, index) => {
            pollAnswer.innerHTML += `
            <button data-index="${index + 1}" class="poll__answer">
                ${el}
            </button>
            `
        });

        document.addEventListener('click', (e) => {
            if(e.target.classList.contains('poll__answer')) {
                alert('Спасибо, ваш голос учтен!')
                e.defaultPrevented;
                let index = e.target.dataset.index;

                let result = new XMLHttpRequest();
                result.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                result.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                result.send( `vote=${id}&answer=${index}`);

                result.addEventListener('readystatechange', () => {
                    if (result.readyState === 4 && result.status === 200) {
                        let dataRes = JSON.parse(result.responseText);
                        pollAnswer.innerHTML = "";
                        let data = dataRes.stat;
                        for(let k in data) {
                            pollAnswer.innerHTML += `<div>${data[k].answer}  ${data[k].votes}</div>`
                        }
                    }
                })

            }
        })
    }
})
