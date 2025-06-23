// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// }

// add(1, 2, (value) => {
//   console.log(value);
// });

function orderFood(callback) {
  setTimeout(() => {
    const food = 'Pizza';
    callback(food);
  }, 3000)
}

function cooldownFood(food) {
  setTimeout(() => {
    const cooldownFood = `식은 ${food}`;
    callback(cooldownFood);
  }, 2000);
}

function frreezeFood(food, callback) {
  setTimeout(() => {
    const frreezedFood = `얼린 ${food}`;
    callback(frreezedFood);
  }, 3000)
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownFood) => {
    console.log(cooldownFood);

    frreezeFood(cooldownFood, (frreezedFood) => {
      console.log(frreezedFood);
    });
  });
});