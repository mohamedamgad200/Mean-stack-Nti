const categorySelection = document.getElementById("selection-list");
const productsContainer = document.querySelector(".products");
const sortSelect = document.getElementById("sort");
const filterForm = document.getElementsByClassName("filter");
const btnCloseModal = document.querySelector(".close-modal");
const model = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const searchByName = document.getElementById("searchByName");
const selectionList = document.getElementById("selection-list");
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const filterButton = document.querySelector(".filter-button");
const shoppingCartContainer = document.querySelector(".cart-list");
const quantity = document.querySelector(".quantity");
const price = document.querySelector(".price");
const paginationContainer = document.querySelector(".pagination");
let productsData = [];
let shoppingCart = [];
async function getCategories() {
  try {
    const fetchCategories = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await fetchCategories.json();
    console.log(data);

    data.map((el) =>
      categorySelection.insertAdjacentHTML(
        "beforeend",
        `<option value="${el}">${el}</option>`
      )
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}
async function getProducts() {
  try {
    const fetchProducts = await fetch("https://fakestoreapi.com/products");
    const data = await fetchProducts.json();
    productsData = data;
    renderProducts(productsData);
    console.log(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
function renderShoppingCart(products) {
  shoppingCartContainer.innerHTML = "";
  products.map((product) =>
    shoppingCartContainer.insertAdjacentHTML(
      "beforeend",
      `<li class="shopping-cart-product">
        <p><span>${product.title}</span> - <span>$${product.price}</span> <span>${product.count}</span>
        <button class="shopping-cart-remove" data-id="${product.id}">Remove</button>
        </p>
       </li>`
    )
  );
  renderQuantityAndPrice(products);
  deleteFromCartListener();
}
function renderQuantityAndPrice(products) {
  const totalPrice = products
    .reduce((acc, product) => acc + product.price * product.count, 0)
    .toFixed(2);
  const count = products.reduce((acc, product) => acc + product.count, 0);
  console.log(price, count);
  price.textContent = `$ ${totalPrice}`;
  quantity.textContent = count;
}
let itemsPerPage = 5;
let currentPage = 1;

function renderProducts(products) {
  productsContainer.innerHTML = "";
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);
  paginatedProducts.map((el) =>
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="product">
              <img src=${el.image} alt="Product Image">
              <h3>${el.title}</h3>
              <p>$${el.price}</p>
              <button type="button" data-id="${el.id}" class='viewDetails'>View Details</button>
              <button type="button" data-id="${el.id}" class='addToCart'>Add to Cart</button>
          </div>`
    )
  );

  addViewDetailsListeners();
  addToCartListeners();
  renderPagination(products.length);
}

function renderPagination(totalItems) {
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (currentPage > 1) {
    paginationContainer.insertAdjacentHTML(
      "beforeend",
      `<a href="#" class="pagination-link" data-page="${
        currentPage - 1
      }">Previous</a>`
    );
  }

  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.insertAdjacentHTML(
      "beforeend",
      `<a href="#" class="pagination-link ${
        i === currentPage ? "active" : ""
      }" data-page="${i}">${i}</a>`
    );
  }

  if (currentPage < totalPages) {
    paginationContainer.insertAdjacentHTML(
      "beforeend",
      `<a href="#" class="pagination-link" data-page="${
        currentPage + 1
      }">Next</a>`
    );
  }
  document.querySelectorAll(".pagination-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = Number(e.target.getAttribute("data-page"));
      renderProducts(productsData); // Re-render products with updated page
    });
  });
}

async function showProductDetails(productId) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const product = await response.json();
    console.log(product);
    document.querySelector(".modal-title").textContent = product.title;
    document.querySelector(".modal-description").textContent =
      product.description;
    document.querySelector(".model-category").textContent = product.category;
    document.querySelector(".modal-price").textContent = `$${product.price}`;
    document.querySelector(".modal-image").src = product.image;
    document.querySelector(".model-rating").textContent = product.rating.rate;
    document.querySelector(".model-view").textContent = product.rating.count;
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
}
function openModal() {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
async function addToCart(productId) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const product = await response.json();
  console.log(productId);
  const productInCart = shoppingCart.find(
    (item) => item.id === Number(productId)
  );

  console.log(productInCart);
  if (productInCart) {
    productInCart.count += 1;
  } else {
    shoppingCart.push({ ...product, count: 1 });
  }
  console.log(shoppingCart);
  renderShoppingCart(shoppingCart);
}
function deleteFromCart(productId) {
  const index = shoppingCart.findIndex(
    (product) => product.id === Number(productId)
  );

  if (index !== -1) {
    shoppingCart.splice(index, 1);
    renderShoppingCart(shoppingCart); // Refresh cart after deletion
  }
  console.log(shoppingCart);
}

function addViewDetailsListeners() {
  document.querySelectorAll(".viewDetails").forEach((button) =>
    button.addEventListener("click", (event) => {
      const productId = event.target.getAttribute("data-id");
      openModal();
      showProductDetails(productId);
    })
  );
}
function deleteFromCartListener() {
  document.querySelectorAll(".shopping-cart-remove").forEach((button) =>
    button.addEventListener("click", (event) => {
      const productId = event.target.getAttribute("data-id");
      console.log(productId);
      deleteFromCart(productId);
      console.log(shoppingCart);
    })
  );
}
function addToCartListeners() {
  document.querySelectorAll(".addToCart").forEach((button) =>
    button.addEventListener("click", (event) => {
      const productId = event.target.getAttribute("data-id");
      console.log(productId);
      addToCart(productId);
    })
  );
}

sortSelect.addEventListener("change", (e) => {
  const sortBy = e.target.value;
  sortProducts(sortBy);
});
function sortProducts(criteria) {
  let sortedProducts = [...productsData];
  if (criteria === "name") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (criteria === "rating") {
    sortedProducts.sort(
      (a, b) => (b?.rating?.rate || 0) - (a?.rating?.rate || 0)
    );
  } else if (criteria === "price") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }
  renderProducts(sortedProducts);
}
getCategories();
getProducts();

// async function getProductsWithinCategory(category) {
//   try {
//     const fetchProducts = await fetch(
//       `https://fakestoreapi.com/products/category/${category}`
//     );
//     const data = await fetchProducts.json();
//     console.log(data);
//     renderProducts(data);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// }
function closeModal() {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
}
btnCloseModal.addEventListener("click", closeModal);
function filterByName(products, name) {
  return products.filter(
    (product) => name === "" || product.title.toLowerCase().includes(name)
  );
}

function filterByPrice(products, minPrice, maxPrice) {
  const min = parseFloat(minPrice) || 0;
  const max = parseFloat(maxPrice) || Infinity;
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
}

function filterByCategory(products, category) {
  return products.filter(
    (product) => category === "All-categories" || product.category === category
  );
}

function applyFilter() {
  const productName = searchByName.value.toLowerCase();
  const minPriceValue = minPrice.value;
  const maxPriceValue = maxPrice.value;
  const selectedCategory = categorySelection.value;
  let filteredProducts = productsData;
  filteredProducts = filterByName(filteredProducts, productName);
  filteredProducts = filterByPrice(
    filteredProducts,
    minPriceValue,
    maxPriceValue
  );
  filteredProducts = filterByCategory(filteredProducts, selectedCategory);

  renderProducts(filteredProducts);
}

filterButton.addEventListener("click", (e) => {
  e.preventDefault();
  applyFilter();
});
