button.onclick = function () {
    let element = document.getElementById('text');

    element.classList.add('display-none');
}

function hideButton() {
    let elem = document.getElementsByClassName('button');

    for (let i = 0; i < elem.length; i++) {
        let element = elem[i];
        element.style.display = 'none';
    }
}