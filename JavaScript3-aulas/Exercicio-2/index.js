function radioinputs(radioDiv, radioId, radioName, tempo) {
    radioDiv.append(
        createInput(radioId, radioName, "radio", null),
        createLabel(tempo, radioId)
    );
}
function createLabel(text, htmlFor) {
    const label = document.createElement("label");
    label.innerText = text;
    label.htmlFor = htmlFor;
    return label;
}
function createInput(id, name, type = "text", value = "") {
    const input = document.createElement("input");
    input.id = id;
    input.name = name;
    input.type = type;
    input.value = value;
    return input;
}
const devName = document.querySelector("#nome").value;
const where = document.querySelector(".content");
let count = 0;
function createForm() {
    if (devName == "") {
        alert("Insira um nome para o desenvolvedor");
    } else {
        // Div Info
        const info = document.createElement("div");
        info.className = "info";
        // Título
        const h1 = document.createElement("h1");
        h1.innerText = devName + " Info's";
        // Input nome
        const textDiv = document.createElement("div");
        textDiv.className = "techName";
        const textLabel = createLabel("Tecnologias: ", "techName-" + count);
        const textInput = createInput("techName-" + count, null, null, null);
        // Título
        const h3 = document.createElement("h3");
        h3.innerText = "Tempo de Experiência:";
        // Input Radio
        const radioDiv = document.createElement("div");
        radioDiv.className = "experience";
        radioinputs(
            radioDiv,
            "experienceTime-" + count + ".1",
            "experienceTime-" + count,
            "0 - 2 anos"
        );
        radioinputs(
            radioDiv,
            "experienceTime-" + count + ".2",
            "experienceTime-" + count,
            "3 - 4 anos"
        );
        radioinputs(
            radioDiv,
            "experienceTime-" + count + ".3",
            "experienceTime-" + count,
            "5+ anos"
        );
        const br = document.createElement("br");
        count++;
        // Remove Button
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.innerText = "Remove";
        // Insert
        radioDiv.append(br, removeBtn);
        textDiv.append(textLabel, textInput);
        info.append(h1, textDiv, h3, radioDiv);
        where.append(info);
        // Remove
        removeBtn.addEventListener("click", function () {
            where.removeChild(info);
        });
    }
}
// Cadastro
const form = document.getElementById("submitForm");
where.addEventListener("submit", function (ev) {
    ev.preventDefault();
    console.log(devName);
});
