const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const productData = JSON.parse(localStorage.getItem(productId));

if (productData) {
    const { name, desc, price, image } = productData;

    const productDetails = document.getElementById("product-details");
    productDetails.innerHTML = `
        <img src="${image}" alt="${name}" />
        <h1>${name}</h1>
        <p>${desc}</p>
        <p><strong>Price:</strong> $${price}</p>
    `;
} else {
    document.getElementById("product-details").innerHTML = `<p>Product not found!</p>`;
}
