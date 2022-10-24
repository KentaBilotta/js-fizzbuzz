let container = document.querySelector(".container"); 

for (let i = 1; i <=100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        container.innerHTML += `<div class="square pink">${"fizzbuzz"}</div>`;
    } else {
        if (i % 3 == 0) {
            container.innerHTML += `<div class="square green">${"fizz"}</div>`;
        } else {
            if (i % 5 == 0) {
                container.innerHTML += `<div class="square yellow">${"buzz"}</div>`;
            } else {
                container.innerHTML += `<div class="square blue">${i}</div>`;
            }
        }
    }
}

