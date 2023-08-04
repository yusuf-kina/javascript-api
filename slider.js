let slideIndex = 2;
slideShow(slideIndex);

function slideRoute(n) {
    slideShow(slideIndex += n);
}

function currentSlide(n) {
    slideShow(slideIndex = n);
}

function slideShow(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display="none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";

    dots[slideIndex-1].className +=" active";
}



var dataPerPage = 10; // Her sayfada gösterilecek ürün sayısı
var currentPage = 1; // Mevcut sayfa numarası

// Verileri çekme ve sayfalama işlemi
var data = fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(veri => {
    var dataDiv = document.getElementById('product_container');
    dataDiv.innerHTML = ""; // Önce div içeriğini temizleyelim

    var startIndex = (currentPage - 1) * dataPerPage;
    var endIndex = startIndex + dataPerPage;
    var currentData = veri.products.slice(startIndex, endIndex);

    currentData.forEach(element => {
      // Her bir veri için ayrı bir div oluşturun
      var productDiv = document.createElement("div");
      productDiv.classList.add("product-div"); //class ekleme işlemi

      // Veri içeriğini oluşturun
      var imageElement = document.createElement("img");
      imageElement.src = element.thumbnail;
      imageElement.classList.add("image-thumbnail");
      imageElement.setAttribute("data-id", element.id);
      productDiv.appendChild(imageElement);

      var titleP = document.createElement("p");
      var titleTextNode = document.createTextNode("Title: " + element.title);
      titleP.appendChild(titleTextNode);
      productDiv.appendChild(titleP);

      var priceP = document.createElement("p");
      var priceTextNode = document.createTextNode("Price: " + element.price);
      priceP.classList.add("price-style");
      priceP.appendChild(priceTextNode);
      productDiv.appendChild(priceP);

      var stockP = document.createElement("p");
      var stockTextNode = document.createTextNode("Stock: " + element.stock);
      stockP.classList.add("stock-style");
      stockP.appendChild(stockTextNode);
      productDiv.appendChild(stockP);

      // Yönlendirme işlemi
      productDiv.addEventListener("click", function () {
        var productId = this.querySelector("img").getAttribute("data-id");
        var detailPageURL = "product-details.html?id=" + productId;
        window.location.href = detailPageURL;
      });

      dataDiv.appendChild(productDiv);
    });

    // Sayfalama düğmelerini ekleyelim
    var paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = ""; // Önce div içeriğini temizleyelim

    var totalPages = Math.ceil(veri.products.length / dataPerPage);
    for (var i = 1; i <= totalPages; i++) {
      var pageButton = document.createElement("button");
      pageButton.classList.add("pageButton-style");
      pageButton.textContent = i;
      pageButton.addEventListener("click", function () {
        currentPage = parseInt(this.textContent);
        // Yeni sayfada verileri yeniden çekelim ve gösterelim
        data = fetch("https://dummyjson.com/products")
          .then(response => response.json())
          .then(veri => {
            dataDiv.innerHTML = ""; // Önce div içeriğini temizleyelim
            var startIndex = (currentPage - 1) * dataPerPage;
            var endIndex = startIndex + dataPerPage;
            var currentData = veri.products.slice(startIndex, endIndex);

            currentData.forEach(element => {
              // Her bir veri için ayrı bir div oluşturun
      var productDiv = document.createElement("div");
      productDiv.classList.add("product-div"); //class ekleme işlemi

      // Veri içeriğini oluşturun
      var imageElement = document.createElement("img");
      imageElement.src = element.thumbnail;
      imageElement.classList.add("image-thumbnail");
      imageElement.setAttribute("data-id", element.id);
      productDiv.appendChild(imageElement);

      var titleP = document.createElement("p");
      var titleTextNode = document.createTextNode("Title: " + element.title);
      titleP.appendChild(titleTextNode);
      productDiv.appendChild(titleP);

      var priceP = document.createElement("p");
      var priceTextNode = document.createTextNode("Price: " + element.price);
      priceP.classList.add("price-style");
      priceP.appendChild(priceTextNode);
      productDiv.appendChild(priceP);

      var stockP = document.createElement("p");
      var stockTextNode = document.createTextNode("Stock: " + element.stock);
      stockP.classList.add("stock-style");
      stockP.appendChild(stockTextNode);
      productDiv.appendChild(stockP);

      // Yönlendirme işlemi
      productDiv.addEventListener("click", function () {
        var productId = this.querySelector("img").getAttribute("data-id");
        var detailPageURL = "product-details.html?id=" + productId;
        window.location.href = detailPageURL;
      });

      dataDiv.appendChild(productDiv);
            });
          })
          .catch(error => {
            console.error('Veri çekme hatası:', error);
          });
      });
      paginationDiv.appendChild(pageButton);
    }
  })
  .catch(error => {
    console.error('Veri çekme hatası:', error);
  });


 var dataPerPage = 10; // Her sayfada gösterilecek ürün sayısı
var currentPage = 1; // Mevcut sayfa numarası

// Verileri çekme ve sayfalama işlemi
var data = fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(veri => {
    var dataDiv = document.getElementById('product_container');
    dataDiv.innerHTML = ""; // Önce div içeriğini temizleyelim

    var startIndex = (currentPage - 1) * dataPerPage;
    var endIndex = startIndex + dataPerPage;
    var currentData = veri.products.slice(startIndex, endIndex);

    currentData.forEach(element => {
      // Her bir veri için ayrı bir div oluşturun
      var productDiv = document.createElement("div");
      productDiv.classList.add("product-div"); //class ekleme işlemi

      // Veri içeriğini oluşturun
      var imageElement = document.createElement("img");
      imageElement.src = element.thumbnail;
      imageElement.classList.add("image-thumbnail");
      imageElement.setAttribute("data-id", element.id);
      productDiv.appendChild(imageElement);

      var titleP = document.createElement("p");
      var titleTextNode = document.createTextNode("Title: " + element.title);
      titleP.appendChild(titleTextNode);
      productDiv.appendChild(titleP);

      var priceP = document.createElement("p");
      var priceTextNode = document.createTextNode("Price: " + element.price);
      priceP.classList.add("price-style");
      priceP.appendChild(priceTextNode);
      productDiv.appendChild(priceP);

      var stockP = document.createElement("p");
      var stockTextNode = document.createTextNode("Stock: " + element.stock);
      stockP.classList.add("stock-style");
      stockP.appendChild(stockTextNode);
      productDiv.appendChild(stockP);

      // Yönlendirme işlemi
      productDiv.addEventListener("click", function () {
        var productId = this.querySelector("img").getAttribute("data-id");
        var detailPageURL = "product-details.html?id=" + productId;
        window.location.href = detailPageURL;
      });

      dataDiv.appendChild(productDiv);
    });

    // Sayfalama düğmelerini ekleyelim
    var paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = ""; // Önce div içeriğini temizleyelim

    var totalPages = Math.ceil(veri.products.length / dataPerPage);
    for (var i = 1; i <= totalPages; i++) {
      var pageButton = document.createElement("button");
      pageButton.classList.add("pageButton-style");
      pageButton.textContent = i;
      pageButton.addEventListener("click", function () {
        currentPage = parseInt(this.textContent);
        // Yeni sayfada verileri yeniden çekelim ve gösterelim
        data = fetch("https://dummyjson.com/products")
          .then(response => response.json())
          .then(veri => {
            dataDiv.innerHTML = ""; // Önce div içeriğini temizleyelim
            var startIndex = (currentPage - 1) * dataPerPage;
            var endIndex = startIndex + dataPerPage;
            var currentData = veri.products.slice(startIndex, endIndex);

            currentData.forEach(element => {
              // Her bir veri için ayrı bir div oluşturun
      var productDiv = document.createElement("div");
      productDiv.classList.add("product-div"); //class ekleme işlemi

      // Veri içeriğini oluşturun
      var imageElement = document.createElement("img");
      imageElement.src = element.thumbnail;
      imageElement.classList.add("image-thumbnail");
      imageElement.setAttribute("data-id", element.id);
      productDiv.appendChild(imageElement);

      var titleP = document.createElement("p");
      var titleTextNode = document.createTextNode("Title: " + element.title);
      titleP.appendChild(titleTextNode);
      productDiv.appendChild(titleP);

      var priceP = document.createElement("p");
      var priceTextNode = document.createTextNode("Price: " + element.price);
      priceP.classList.add("price-stylel");
      priceP.appendChild(priceTextNode);
      productDiv.appendChild(priceP);

      var stockP = document.createElement("p");
      var stockTextNode = document.createTextNode("Stock: " + element.stock);
      stockP.appendChild(stockTextNode);
      productDiv.appendChild(stockP);

      // Yönlendirme işlemi
      productDiv.addEventListener("click", function () {
        var productId = this.querySelector("img").getAttribute("data-id");
        var detailPageURL = "product-details.html?id=" + productId;
        window.location.href = detailPageURL;
      });

      dataDiv.appendChild(productDiv);
            });
          })
          .catch(error => {
            console.error('Veri çekme hatası:', error);
          });
      });
      paginationDiv.appendChild(pageButton);
    }
  })
  .catch(error => {
    console.error('Veri çekme hatası:', error);
  });


 