const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContent = Array.from(document.querySelectorAll(".tab__content"));
//console.log(tabs);
//console.log(tabsContent);

const openMenu = function (event) {
    let index = tabs.findIndex((tab) => tab.classList.contains("tab_active"));
    //console.log(index)
    tabs[index].classList.remove("tab_active");
    tabsContent[index].classList.remove("tab__content_active");
    //event.target.classList.toggle("tab_active");
    event.currentTarget.classList.toggle("tab_active");
    index = tabs.findIndex((tab) => tab.classList.contains("tab_active"));
    //console.log(index)
    tabsContent[index].classList.toggle("tab__content_active");
};

tabs.forEach((tab) => tab.addEventListener("click", openMenu));

//setTimeout(openMenu(),5000);
