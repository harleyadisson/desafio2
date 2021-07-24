function cadastraProduto(event) {
    event.preventDefault();
    let code = document.getElementById("code").value
    let name = document.getElementById("name").value
    let description = document.getElementById("description").value
    let quantity = document.getElementById("quantity").value
    let price = document.getElementById("price").value

    let produto = {
        "code": code,
        "name": name,
        "description": description,
        "quantity": quantity,
        "price": price,
    }
    localStorage.setItem(code,JSON.stringify(produto))
    alert("Produto cadastro com sucesso!");
}