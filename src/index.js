/*
1 - Aquele p de campo obrigatório deve estar abaixo de todos os inputs
2 - Pra tu manipular os inputs com mais facilidade, todos deve ter a mesma classe, inclusive o textarea 
3 - Depois a ideia é: os campos devem ser validados após o envio do mesmo. Então a partir dai tu monta a lógica, pegando o elemento do formulário, adicionando um evento de submit e fazer a manipulação dos campos dentro desse evento
4 - Depois de obter TODOS os elementos, é necessário percorrer todos usando o forEach e fazer a verificação se o input está vazio ou não usando .value === ""

*/

/*
  TODO - 1: Obter todos os elementos do campo obrigatorio e adicionar a classe invalido ou valido baseado no valor do input, se está vazio ou não.

  TODO - 2: Existem 2 formas para validar mostrar a mensagem do campo obrigatorio, a primeira é utilizando o parametro index do forEach, que ele irá saber com qual input ele está lidando, por exemplo de uso: camposObrigatorio[index].classList.add() para adicionar e camposObrigatorio[index].classList.remove() para remover a classe. Baseado na condição acima.

  TODO - 3: Outra forma é usando o input.nextElementSibling, que ele irá pegar o próximo elemento do input, que no caso é o p, então tu pode fazer a mesma coisa que a primeira forma, só que ao invés de usar o index, tu usa o nextElementSibling, por exemplo: input.nextElementSibling.classList.add() e input.nextElementSibling.classList.remove().
*/

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
