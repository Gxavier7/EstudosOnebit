async function imcCalculator(weight, height) {
  if (typeof weight !== 'number' || typeof height !== 'number') {
    return Promise.reject("O peso ou a altura não foram passados corretamente");
  }
  return weight / (height * height);
};

function waitFor (seconds) {
  return new Promise ( (resolve) => {
    setTimeout( () => {
      resolve();
    }, 1000 * seconds)
  })
}

async function imcSituation (weight, height) {
  try {
    console.log("Calculadora Iniciada");
    console.log("Calculando...");
    
    await waitFor(1.5);
    const result = await imcCalculator(weight, height);

    if (result <= 18.5) console.log(`Sua situação é de magreza, com IMC: ${result}`);
    else if (result <= 24.9) console.log(`Sua situação é normal, com IMC: ${result}`);
    else if (result <= 29.9) console.log(`Sua situação é de sobrepeso, com IMC: ${result}`);
    else if (result <= 39.9) console.log(`Sua situação é de obesidade, com IMC: ${result}`);
    else console.log(`Sua situação é de obesidade grave, com IMC: ${result}`);

  } catch (err) {
    console.log(err);
  } finally {
    console.log("Calculadora finalizada");
  }
}

imcSituation(62, 1.72)