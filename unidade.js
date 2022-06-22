function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(unidade) {
    linha = document.createElement("tr");
    tdNome = document.createElement("td");
    tdEndereco = document.createElement("td");
    tdTelefone = document.createElement("td");
    tdNome.innerHTML = unidade.name;
    tdEndereco.innerHTML = unidade.endereco;
    tdTelefone.innerHTML = unidade.telefone;

    linha.appendChild(tdNome);
    linha.appendChild(tdEndereco);
    linha.appendChild(tdTelefone);

    return linha;
}

function main() {
    data = fazGet("http://127.0.0.1:8080/get-unidade")
    unidades = JSON.parse(data);
    console.log(unidades)
    let tabela = document.getElementById("tabela")

    unidades.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha)
    })
}

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')
    
document.getElementById('cadastrarUnidade')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)
    
let nome = document.getElementById('modal-field-nome')
let endereco = document.getElementById('modal-field-endereco')
let telefone = document.getElementById('modal-field-telefone')

document.getElementById('POST')
    .addEventListener('click', main())

main()