let total = 0;
const renderLi = document.getElementById("expense-list");
const addBtn = document.getElementById("add-expense");
const itemName = document.getElementById("item-name");
const itemCost = document.getElementById("item-cost");
const totalUi = document.getElementById("total-display");
addBtn.addEventListener("click", () => {
  total += parseFloat(itemCost.value);
  totalUi.textContent = `Total: ${total}`;
  console.log(total);
  
  creation(itemName.value);
  
  console.log(addBtn, itemCost.value, itemName.value);
});
function creation(value) {
  let html = `
<li class="expense-item">
  <span>${value}</span>
  <button class="delete-btn">Delete</button>
</li>
`;
  renderLi.innerHTML += html;
}
renderLi.addEventListener('click', (e) => {
  if (e.target.matches('.delete-btn')) {
    
    let deltask = e.target.closest(".expense-item");
    deltask.remove();
  }
})
