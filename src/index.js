/*
1 - Aquele p de campo obrigatório deve estar abaixo de todos os inputs
2 - Pra tu manipular os inputs com mais facilidade, todos deve ter a mesma classe, inclusive o textarea 
3 - Depois a ideia é: os campos devem ser validados após o envio do mesmo. Então a partir dai tu monta a lógica, pegando o elemento do formulário, adicionando um evento de submit e fazer a manipulação dos campos dentro desse evento
4 - Depois de obter TODOS os elementos, é necessário percorrer todos usando o forEach e fazer a verificação se o input está vazio ou não usando .value === ""

*/

const form = document.getElementById('form')
const inputs = document.querySelectorAll('.input');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    inputs.forEach(function (input) {

        if (input.value === '') {
            input.classList.add('aviso')

        } else {
            input.classList.remove('aviso')
        }
    })
})
