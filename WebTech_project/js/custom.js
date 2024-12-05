// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})

document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    const username = document.querySelector('input[placeholder="username"]').value.trim();
    const password = document.querySelector('input[placeholder="password"]').value.trim();

    if (username === 'admin' && password === 'admin') {
        // Redirect to the managerial page
        window.location.href = 'managerial.html';
    } else {
        // Show an error message
        alert('Invalid username or password. Please try again.');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("product-form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Get the form data
        const productName = document.getElementById("product-name").value;
        const productDesc = document.getElementById("product-desc").value;
        const productPrice = document.getElementById("product-price").value;
        const productImage = document.getElementById("product-image").files[0];

        // Validate the file input
        if (!productImage) {
            alert("Please upload an image.");
            return;
        }

        // Convert the image file to a Base64 string
        const reader = new FileReader();
        reader.onload = function () {
            const productImageBase64 = reader.result;

            // Create a product object
            const product = {
                name: productName,
                description: productDesc,
                price: parseFloat(productPrice),
                image: productImageBase64,
            };

            // Save the product to localStorage
            const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
            existingProducts.push(product);
            localStorage.setItem("products", JSON.stringify(existingProducts));

            // Clear the form
            form.reset();

            alert("Product saved successfully!");
        };

        reader.readAsDataURL(productImage);
    });
});

$(document).ready(function () {
    // Listen for button click
    $("#form-button").on("click", function (e) {
      e.preventDefault(); // Prevent default form submission or navigation
  
      // Retrieve input values
      const name = $("input[placeholder='Name']").val();
      const email = $("input[placeholder='Email']").val();
      const phone = $("input[placeholder='Phone']").val();
      const message = $("input.message-box").val();
  
      // Display the values in an alert
      alert(
        `Submitted Values:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
      );
  
      // Clear the form inputs
      $(this).closest("form").trigger("reset");
    });
  });
  