// Procurar o botao
document.querySelector("#add-time")

// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField() {

    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cadacampo, limpar
    fields.forEach(function(field) {
        // Pegar o field do momento
        field.value =""
    })

    // Colocar na pagina. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}