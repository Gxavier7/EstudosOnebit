const save = document.querySelector("#players");
function escalarJogador() {
    let positionText = document.querySelector("#position").value;

    let nameText = document.querySelector("#name").value;

    let numberText = document.querySelector("#number").value;

    const confirmation = confirm(
        "Sure you want to roster this player?\nName: " +
            nameText +
            "\nPosition: " +
            positionText +
            "\nTshirt: " +
            numberText
    );

    if (confirmation) {
        const li = document.createElement("li");
        li.className = nameText;
        const h3 = document.createElement("h3");
        h3.innerText = nameText;
        const positionParagraph = document.createElement("p");
        positionParagraph.innerText = "Position: " + positionText;
        const numberParagraph = document.createElement("p");
        numberParagraph.innerText = "Número da camisa: " + numberText;

        li.append(h3, positionParagraph, numberParagraph);
        save.appendChild(li);
    }
    document.querySelector("#position").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#number").value = "";
}
function removerJogador() {
    const playerToDelete = prompt("Insert the player name you want to delete");
    const jogador = document.getElementsByClassName(playerToDelete);
    const confirm = confirm("Deseja remover esse jogador?");
    if (confirm) {
        jogador.remove();
    }
}
