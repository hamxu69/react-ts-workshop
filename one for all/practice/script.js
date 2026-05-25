const products = [
  { id: 1, nameokay: "Mechanical Keyboard", price: 150, category: "Tech" },
  { id: 2, nameokay: "Coffee Mug", price: 20, category: "Lifestyle" },
  { id: 3, nameokay: "Gaming Mouse", price: 80, category: "Tech" },
  { id: 4, nameokay: "Monitor", price: 300, category: "Tech" },
];
const affordableTech = products.filter((product) => {
  if (product.category === "Tech") {
    if (product.price <= 200) {
      return "okay";
    }
  }
});
console.log(affordableTech);
const productLabels = affordableTech.map((el) => {
console.log(  `Item: ${nameokay} - ${price}`);

});
