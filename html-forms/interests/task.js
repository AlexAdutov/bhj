const checkboxes = document.querySelectorAll('input.interest__check');
for (let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes[i];
    const interests = checkbox.closest('ul.interests_active');
    //console.log(interests)
    if (interests === null) {
        checkbox.onchange = function () {
            const list = checkbox.closest('li.interest');
            const children = list.querySelectorAll('input.interest__check');
            //console.log(children)
            for (let j = 0; j < children.length; j++) {
                const child = children[j];
                child.checked = checkbox.checked;
            }
        }
    }
}