let nome = document.getElementById('productName')
let descricao = document.getElementById('productDescription')
let preco = document.getElementById('productPrice')

let produtos = JSON.parse(localStorage.getItem('produtos')) || []
let encontrado = -1

function cadastrar(){
    let produto = {
        nome: nome.value,
        descricao: descricao.value,
        preco: Number(preco.value)
    }
    produtos.push(produto) 
    console.log(produtos);

    limparFormulario()

    localStorage.setItem('produtos', JSON.stringify(produtos))
    alert("Produto cadastrado com sucesso!")
}

function limparFormulario(){
    nome.value = ''
    descricao.value = ''
    preco.value = ''
    nome.focus()
}

function pesquisar(){
    let pesquisa = nome.value
    for(i=0;i<produtos.length;i++){
        if(produtos[i].nome == pesquisa){
            // console.log(produtos[i])
            descricao.value = produtos[i].descricao
            preco.value = produtos[i].preco
            encontrado = i
        }
    }
}


function salvar(){
    produtos[encontrado].nome = nome.value
    produtos[encontrado].descricao = descricao.value
    produtos[encontrado].preco = Number(preco.value)

    limparFormulario()
    alert("Produto alterado com sucesso")
    localStorage.setItem('produtos', JSON.stringify(produtos))
}

function deletar(){
    if(encontrado != -1){
        produtos.splice(encontrado,1);
    
        limparFormulario()
        alert("Produto removido com sucesso")
        encontrado = -1
        localStorage.setItem('produtos', JSON.stringify(produtos))
    }else{
        alert('#erro21321')
    }

}