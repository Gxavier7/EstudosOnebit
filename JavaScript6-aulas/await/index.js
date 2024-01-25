async function asyncSum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return Promise.reject("Arguments must be of type number")
  }
  return a + b;
}

const sumResult = asyncSum(50, 33)

async function execute () {
  // Antes
  // asyncSum(50, 33).then(result => {
  //   console.log(result);
  // })

  try {
    const result = await asyncSum(50, 33);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
  
}