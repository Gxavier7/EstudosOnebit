function imcCalculator(weight, height) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (typeof weight !== 'number' || typeof height !== 'number') {
        reject("O peso ou a altura não foram passados corretamente");
      }else{
        resolve(weight / (height * height));
      }

    }, 1000 * 1.5)
  });
}

function imcSituation (weight, height) {
  imcCalculator(weight, height)
    .then((result) => {
    if (result <= 18.5) console.log(`Sua situação é de magreza, com IMC: ${result}`);
    else if (result <= 24.9) console.log(`Sua situação é normal, com IMC: ${result}`);
    else if (result <= 29.9) console.log(`Sua situação é de sobrepeso, com IMC: ${result}`);
    else if (result <= 39.9) console.log(`Sua situação é de obesidade, com IMC: ${result}`);
    else console.log(`Sua situação é de obesidade grave, com IMC: ${result}`);
  })
    .catch((result) => {
    console.log(result)
  })
    .finally(() => {
    console.log("Calculadora finalizada");
  })

  console.log("Calculadora Iniciada");
  console.log("Calculando...");
}

imcSituation(62, 1.72)