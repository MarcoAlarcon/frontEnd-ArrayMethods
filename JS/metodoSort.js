let btnOrdernarPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdernarPreco.addEventListener('click', ordernarPreco)

function ordernarPreco(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    botarLivros(livrosOrdenados)
}