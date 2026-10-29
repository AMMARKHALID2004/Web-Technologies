const cart = [];
const productLimit = 3;
const cartButton = document.querySelector(".cart-button");
const cartCount = document.querySelector(".cart-count");
const miniCart = document.querySelector(".mini-cart");

function productDetails(button) {
  const card = button.closest(".product-card");
  return {
    name: card.querySelector(".product-name").textContent.trim(),
    price: Number(card.querySelector(".product-price").textContent.replace(/[^\d]/g, "")),
    button
  };
}

function renderCart() {
  cartCount.textContent = cart.length;
  cartButton.setAttribute("aria-label", `Shopping cart, ${cart.length} item${cart.length === 1 ? "" : "s"}`);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const counts = new Map();
  cart.forEach((item) => counts.set(item.name, (counts.get(item.name) || 0) + 1));
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    const name = productDetails(button).name;
    const reached = (counts.get(name) || 0) >= productLimit;
    button.disabled = reached;
    button.textContent = reached ? "Limit reached" : "Add to Cart";
  });
  miniCart.innerHTML = `<h2>Your cart</h2>${cart.length ? `<ul>${cart.map((item, index) => `<li><span>${item.name} — ₹ ${item.price}</span><button class="remove-item" type="button" data-index="${index}">Remove</button></li>`).join("")}</ul><p class="mini-cart-total">Total: ₹ ${total}</p>` : "<p>Your cart is empty.</p>"}<a class="mini-cart-checkout" href="checkout.html">Checkout</a>`;
  miniCart.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", () => {
      cart.splice(Number(button.dataset.index), 1);
      renderCart();
    });
  });
}

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    cart.push(productDetails(button));
    renderCart();
  });
});

cartButton.addEventListener("click", () => {
  miniCart.hidden = !miniCart.hidden;
});

renderCart();
