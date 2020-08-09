// Procura botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma accao
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo limpar
    fields.forEach(function(field) {
        // Pegar o field do momento e limpa
        field.value = ""
    });

    // Colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}