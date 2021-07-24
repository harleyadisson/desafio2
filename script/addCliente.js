function cadastraCliente(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value
    let nascimento = document.getElementById("nascimento").value
    let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value
    let endereço = document.getElementById("endereço").value
    let numero = document.getElementById("numero").value
    let cidade = document.getElementById("cidade").value
    let estado = document.getElementById("estado").value
    let cep = document.getElementById("cep").value

    let cliente = {
        "nome": nome,
        "nascimento": nascimento,
        "telefone": telefone,
        "email": email,
        "endereço": endereço,
        "numero": numero,
        "cidade": cidade,
        "estado": estado,
        "cep": cep,
    }
    localStorage.setItem(email,JSON.stringify(cliente))
    alert("Cliente cadastrado com sucesso!");
}