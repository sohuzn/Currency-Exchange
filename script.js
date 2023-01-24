const btnCovert = document.querySelector('#btn');
const btnClear = document.querySelector('#btn-clear');

btnCovert.addEventListener('click', function () {
    UsToKh();
})
btnClear.addEventListener('click', function () {
    result.innerHTML = 'The result will show up here!';
})


function UsToKh() {
    var input = document.querySelector('#input').value;
    var result = document.querySelector('#result');
    var total;

    total = input * 4000;
    result.innerHTML = total + ' ៛';
}

