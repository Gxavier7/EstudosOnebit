let action = 0;
let removed;
const patients = [];
do {
	let fila = "";
	if (patients == "") {
		action = parseFloat(
			prompt("Você ainda não possui pacientes, Qual opção deseja?\n1-Cadastrar Paciente\n3-Sair")
		);
	} else {
		for (let i = 0; i < patients.length; i++) {
			fila += i + 1 + "° - " + patients[i] + "\n";
		}
		action = parseFloat(
			prompt(
				"Os Seus pacientes são:\n" +
					fila +
					"Qual opção deseja?\n1-Cadastrar Paciente\n2-Consultar Paciente\n3-Sair"
			)
		);
	}
	switch (action) {
		case 1:
			patients.push(prompt("Insira o nome do paciente"));
			break;
		case 2:
			removed = patients.shift();
			alert("O paciente " + removed + " foi consultado");
			break;
		case 3:
			break;
		default:
			alert("Opção inválida");
			break;
	}
} while (action < 3);
