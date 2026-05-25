document.addEventListener("DOMContentLoaded", () => {
  let deferredPrompt;
  const heading = document.getElementById("heading");
  const description = document.getElementById("description");
  const installBtn = document.getElementById("install-btn");

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;

    installBtn.style.display = "block";
    installBtn.addEventListener("click", () => {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");

          heading.textContent = "Thank you for installing the app!";
          description.textContent = "We appreciate your support!";
          installBtn.style.display = "none";
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        deferredPrompt = null;
      });
    });
  });

  document.addEventListener("scroll", () => {
    if (deferredPrompt) {
      installBtn.style.display = "block";
    }
  });

  document.addEventListener("tap", () => {
    if (deferredPrompt) {
      installBtn.style.display = "block";
    }
  });

  if (window.matchMedia("(display-mode: standalone)").matches) {
    heading.textContent = "Thank you for installing the app!";
    description.textContent = "We appreciate your support!";
    installBtn.style.display = "none";
  }
});

    const categories = {
      Tables: generateItems("Table", 15),
      Plates: generateItems("Plate", 15),
      Tent: generateItems("Tent", 15),
      Decor: generateItems("Decor", 15),
      Chairs: generateItems("Chair", 15),
      Lights: generateItems("Light", 15)
    };

    let cart = {};
    let currentCategory = '';

    const categoryContainer = document.getElementById('categories');
    const itemContainer = document.getElementById('items');
    const addedItemsList = document.getElementById('addedItemsList');
    const totalAmount = document.getElementById('totalAmount');
    const billList = document.getElementById('billList');
    const finalAmount = document.getElementById('finalAmount');

    Object.keys(categories).forEach(cat => {
      const btn = document.createElement('button');
      btn.innerText = cat;
      btn.className = 'category-btn';
      btn.onclick = () => displayItems(cat);
      categoryContainer.appendChild(btn);
    });

    function generateItems(prefix, count) {
      return Array.from({ length: count }, (_, i) => ({
        name: `${prefix} ${i + 1}`,
        price: (i + 1) * 10
      }));
    }

    function displayItems(category) {
      currentCategory = category;
      itemContainer.innerHTML = '';
      itemContainer.style.display = 'flex';

      categories[category].forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';

        const title = document.createElement('div');
        title.className = 'item-name';
        title.innerText = item.name;

        const price = document.createElement('div');
        price.className = 'price';
        price.innerText = `Rs ${item.price}`;

        const controls = document.createElement('div');
        controls.className = 'controls';

        const minus = document.createElement('button');
        minus.innerText = '-';
        const input = document.createElement('input');
        input.type = 'number';
        input.value = cart[item.name]?.qty || 0;
        input.min = 0;
        const plus = document.createElement('button');
        plus.innerText = '+';

        minus.onclick = () => updateItem(item.name, item.price, parseInt(input.value) - 1);
        plus.onclick = () => updateItem(item.name, item.price, parseInt(input.value) + 1);
        input.onchange = () => updateItem(item.name, item.price, parseInt(input.value));

        controls.appendChild(minus);
        controls.appendChild(input);
        controls.appendChild(plus);

        const total = document.createElement('div');
        total.className = 'item-total';
        total.innerText = `Total: Rs ${item.price * (cart[item.name]?.qty || 0)}`;

        card.append(title, price, controls, total);
        itemContainer.appendChild(card);
      });
    }

    function updateItem(name, price, qty) {
      if (qty <= 0) {
        delete cart[name];
      } else {
        cart[name] = { price, qty };
      }
      displayItems(currentCategory);
      updateSummary();
    }

    function updateSummary() {
      addedItemsList.innerHTML = '';
      let total = 0;
      Object.entries(cart).forEach(([name, { price, qty }]) => {
        const li = document.createElement('li');
        li.innerText = `${name} x${qty} = Rs ${price * qty}`;
        const remove = document.createElement('button');
        remove.innerText = 'Clear';
        remove.onclick = () => updateItem(name, price, 0);
        li.appendChild(remove);
        addedItemsList.appendChild(li);
        total += price * qty;
      });
      totalAmount.innerText = total;
    }

    function showCheckout() {
      billList.innerHTML = '';
      let total = 0;
      Object.entries(cart).forEach(([name, { price, qty }]) => {
        const li = document.createElement('li');
        li.innerText = `${name} x${qty} @ Rs${price} = Rs${price * qty}`;
        billList.appendChild(li);
        total += price * qty;
      });
      finalAmount.innerText = total;
      document.getElementById('checkoutSummary').style.display = 'flex';
    }

    function hideCheckout() {
      document.getElementById('checkoutSummary').style.display = 'none';
    }
  
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => console.log("Service Worker Registered"))
    .catch((err) => console.log("Service Worker Failed", err));
}


