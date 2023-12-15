function execute() {
	return new Promise((resolve, reject) => {
		console.log("A promise está sendo executada...");

		setTimeout(() => {
			console.log("Resolvendo a promise");

			if (true) {
				reject("A promise foi rejeitada");
			} else {
				resolve(42);
			}
		}, 1000 * 2);
	});
}

const p = execute();

p.then((result) => {
	console.log(`A promise foi resolvida. O resultado foi ${result}`);
}).catch((reason) => {
	console.log(`A promise foi rejeitada. O motivo: ${reason}`);
});
