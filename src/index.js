const form = document.getElementById('form')
const inputs = document.querySelectorAll('.input');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    inputs.forEach(function (input) {

        if (input.value.trim() === '') {
            input.classList.add('invalido')
            input.classList.remove('valido')
            input.nextElementSibling.classList.add('mostrar')
            

        } else {
            input.classList.add('valido')
            input.classList.remove('invalido')
            input.nextElementSibling.classList.remove('mostrar')
        }
    })
})
