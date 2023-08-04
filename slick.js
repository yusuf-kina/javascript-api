fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(veri => {
    var dataDiv = document.getElementById('dataContainer');
    dataDiv.innerHTML = ""; // Önce div içeriğini temizleyelim

    var firstTenData = veri.products.slice(0, 10); // İlk 10 veriyi almak için slice() yöntemini kullanıyoruz

    // Verileri iki kez çoğaltarak döngüsel bir kayma sağlayalım
    var loopingData = [...firstTenData, ...firstTenData];

    loopingData.forEach(element => {
      var sliderDiv = document.createElement("div");
      sliderDiv.classList.add("product-slider");

      var imageElement = document.createElement("img");
      imageElement.src = element.thumbnail; 
      imageElement.classList.add("image-thumbnail");
      imageElement.setAttribute("data-id", element.id);
      sliderDiv.appendChild(imageElement);

      var titleP = document.createElement("p");
      var titleTextNode = document.createTextNode("Title: " + element.title);
      titleP.appendChild(titleTextNode);
      titleP.classList.add("product-title");
      titleP.setAttribute("data-id", element.id);
      sliderDiv.appendChild(titleP);

      var priceP = document.createElement("p");
      var priceTextNode = document.createTextNode("Price: " + element.price);
      priceP.appendChild(priceTextNode);
      sliderDiv.appendChild(priceP);

      var stockP = document.createElement("p");
      var stockTextNode = document.createTextNode("Stock: " + element.stock);
      stockP.appendChild(stockTextNode);
      sliderDiv.appendChild(stockP);

      sliderDiv.addEventListener("click", function (event) {
        if (event.target.classList.contains("product-title")) {
          var productId = event.target.getAttribute("data-id");
          var detailPageURL = "product-details.html?id=" + productId;
          window.location.href = detailPageURL;
        }
      });

      dataDiv.appendChild(sliderDiv);
    });

    // Sliderı Kaydırmak İçin Otomatik Geçiş İşlemi
    let currentIndex = 0;
    const slides = document.querySelectorAll('.product-slider');
    const slideWidth = slides[0].offsetWidth;
    const sliderContainer = document.querySelector('.slider-container');

    function startDrag(e) {
      e.preventDefault();
      initialX = e.clientX;
      sliderContainer.style.transition = 'none';
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', endDrag);
    }

    function drag(e) {
      const distance = e.clientX - initialX;
      sliderContainer.style.transform = `translateX(${-(slideWidth * currentIndex) + distance}px)`;
    }

    function endDrag(e) {
      const distance = e.clientX - initialX;
      currentIndex -= Math.round(distance / slideWidth);
      sliderContainer.style.transition = 'transform 0.5s ease-in-out';
      sliderContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

      document.removeEventListener('mousemove', drag);
      document.removeEventListener('mouseup', endDrag);
    }

    let initialX = null;
    sliderContainer.addEventListener('mousedown', startDrag);
  })
  .catch(error => {
    console.error('Hata:', error);
    var dataDiv = document.getElementById('dataContainer');
    dataDiv.innerHTML = 'Veriler alınırken bir hata oluştu.';
  });
