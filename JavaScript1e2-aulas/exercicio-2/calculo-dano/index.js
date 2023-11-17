const characterOne = prompt("Insert first character name:");
const attackCharacterOne = parseFloat(
    prompt("Insert attack of " + characterOne)
);
const characterTwo = prompt("Insert second character name:");
const lifeCharacterTwo = parseFloat(prompt("Insert life of " + characterTwo));
const defenseCharacterTwo = parseFloat(
    prompt("Insert defense of " + characterTwo)
);
const shield = confirm("The character " + characterTwo + " has shield");
let damage = 0;
let spentShield;
let lifeAfter;
let defenseAfter;

if (attackCharacterOne >= defenseCharacterTwo) {
    if (shield === true) {
        damage = (attackCharacterOne - defenseCharacterTwo) / 2;
        spentShield = true;
    } else {
        damage = attackCharacterOne - defenseCharacterTwo;
    }
    lifeAfter = lifeCharacterTwo - damage;
    defenseAfter = 0;
} else {
    defenseAfter = defenseCharacterTwo - attackCharacterOne;
    lifeAfter = lifeCharacterTwo - damage;
    spentShield = false;
}

spentShield = spentShield === true ? "Yes" : "No";

alert(
    "Ao final do ataque " +
        characterTwo +
        " ficou com:\nVida: " +
        lifeAfter +
        "/" +
        lifeCharacterTwo +
        "\nDano: " +
        damage +
        "\nEscudo: " +
        defenseAfter +
        "/" +
        defenseCharacterTwo +
        "\nGastou escudo: " +
        spentShield
);
