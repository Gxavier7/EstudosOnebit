function waitFor (seconds) {
  return new Promise ( (resolve) => {
    setTimeout( () => {
      resolve();
    }, 1000 * seconds)
  })
}

const numbers = [4, 5, 9, 13, 77]

// Antes

// const squares = numbers.map(async (number) => {
//   await waitFor(2);
//   return number * number;
// })

// console.log(squares);

// Promise.all(squares).then(result => {
//   console.log(result);
// })

// Depois

async function execute() {
  console.time("map");

  const squares = await Promise.all(numbers.map(async (number) => {
    await waitFor(2);
    return number * number;
  }))

  console.log(squares);
  console.timeEnd("map");
}

execute()