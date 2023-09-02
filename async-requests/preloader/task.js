const items = document.getElementById("items");
const loader = document.querySelector(".loader");
const xhr = new XMLHttpRequest();
xhr.open('GET','https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let data = JSON.parse(xhr.response).response.Valute;
        loader.classList.remove("loader_active");
        for (let k in data) {
            items.innerHTML += ` 
            <div class = "item">
                <div class="item__code">
                    ${data[k].CharCode}
                </div>
                <div class="item__value">
                    ${data[k].Value}
                </div>   
                <div class="item__currency">
                    ${data[k].Name}
                </div>                                  
            `
        }
    }
})