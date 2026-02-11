const cart = [
  { name: "bananas", price: 1.2, quantity: 3 },
  { name: "apples", price: 0.84, quantity: 6 },
  { name: "carrots", price: 0.89, quantity: 10 },
  { name: "tomatoes", price: 1.53, quantity: 4 },
  { name: "zucchini", price: 1.12, quantity: 2 },
  { name: "oranges", price: 1.0, quantity: 8 },
];

function calculateTotal(cart) {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    const price = cart[i].price;
    const reducPrice = cart[i].price * 0.9;
    const quantity = cart[i].quantity;

    if (cart[i].quantity >= 5) {
      total += reducPrice * quantity;
      //   console.log(total);
    } else {
      total += price * quantity;
    }
  }

  return total.toFixed(2);
  // Si la quantité est supérieure à 5 il faut appliquer 10% sur le prix
  // Retourne un arrondi à deux décimales.
}
console.log(calculateTotal(cart));
const nested = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [45, 45, 65],
];

function flat(tab) {
  const result = [];

  tab.forEach((element) => {
    element.forEach((value) => {
      result.push(value);
    });
  });

  return result;
}

console.log(flat(nested));

// console.log(nested.flat());
