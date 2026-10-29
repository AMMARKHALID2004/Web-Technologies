// N = 37, so the per-product limit is (37 mod 4) + 2 = 3
const cart = [];
const productLimit = 3;
const cartButton = document.querySelector(".cart-button");
const cartCount = document.querySelector(".cart-count");
const miniCart = document.querySelector(".mini-cart");

function productDetails(button) {
  const card = button.closest(".product-card");
  const displayedPrice = card.querySelector(".product-price").textContent.match(/\d[\d,]*/)[0];
  return {
    name: card.querySelector(".product-name").textContent.trim(),
    price: Number(displayedPrice.replace(/,/g, "")),
  };
}

function renderCart() {
  cartCount.textContent = cart.length;
  cartButton.setAttribute("aria-label", `Shopping cart, ${cart.length} item${cart.length === 1 ? "" : "s"}`);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const counts = new Map();
  cart.forEach((item) => counts.set(item.name, (counts.get(item.name) || 0) + 1));

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    const reached = (counts.get(productDetails(button).name) || 0) >= productLimit;
    button.disabled = reached;
    button.textContent = reached ? "Limit reached" : "Add to Cart";
  });

  const items = cart
    .map((item, index) => `<li><span>${item.name} — ₹ ${item.price}</span><button class="remove-item" type="button" data-index="${index}">Remove</button></li>`)
    .join("");

  miniCart.innerHTML =
    `<h2>Your cart</h2>` +
    (cart.length ? `<ul>${items}</ul><p class="mini-cart-total">Total: ₹ ${total}</p>` : `<p>Your cart is empty.</p>`) +
    `<a class="mini-cart-checkout" href="checkout.html">Checkout</a>`;
}

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    cart.push(productDetails(button));
    renderCart();
  });
});

// One delegated listener: Remove buttons are re-created on every render
miniCart.addEventListener("click", (event) => {
  const remove = event.target.closest(".remove-item");
  if (!remove) return;
  cart.splice(Number(remove.dataset.index), 1);
  renderCart();
});

cartButton.addEventListener("click", (event) => {
  event.preventDefault(); // the icon is a link to checkout; here it toggles the panel
  miniCart.hidden = !miniCart.hidden;
});

renderCart();