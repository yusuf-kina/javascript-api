var productId = null;

function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
// JavaScript Kodları
document.addEventListener("DOMContentLoaded", function () {
    // Get the product ID from the URL parameter
    var productId = getParameterByName("id");
    console.log(productId);

    fetch("https://dummyjson.com/products/" + productId)
        .then(response => response.json())
        .then(veri => {
            if (veri) {
                // Update the "product-details" div with the product details
                var productDetailsDiv = document.getElementById("product-details");

                var imagesHTML = '';
                var thumbnailsHTML = '';
                for (var i = 0; i < veri.images.length; i++) {
                    imagesHTML += `<div class="swiper-slide"><img src="${veri.images[i]}" alt="${veri.title} Image ${i + 1}"></div>`;
                    thumbnailsHTML += `<div class="thumbnail" onclick="showBigImage(${i})"><img src="${veri.images[i]}" alt="${veri.title} Image ${i + 1}"></div>`;
                }

                productDetailsDiv.innerHTML = `
                <div class="container">
                    <div class="details-image">
                        <h2>${veri.title}</h2>
                        
                        <div class="big-image-container">
                            <div class="swiper-container big-image-swiper">
                                <div class="swiper-wrapper">
                                    ${imagesHTML}
                                </div>
                                <!-- Add Navigation Arrows -->
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                        </div>
                        
                        <div class="thumbnail-container">
                            <div class="swiper-container thumbnails-swiper">
                                <div class="swiper-wrapper">
                                    ${thumbnailsHTML}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="details-description" id="details-description">
                        <div>
                            <p><b>Marka : </b>  ${veri.brand}</p>
                            <p><b>Kategori :</b> ${veri.category}</p>
                        </div>    
                        <div>
                            <p class="details-price">Price: ${veri.price}</p>
                            <p class="details-stock">Stock: ${veri.stock}</p>
                        </div>
                        <div>
                            <p class="details-sale"><i><b>İndirim Yüzdesi:</b></i> ${veri.discountPercentage}</p>
                            <p class="details-rating">Değerlendirme : ${veri.rating}</p>
                        </div>
                        <div>
                            <p><b>Description:</b> ${veri.description}</p>
                        </div>
                        
                        <div>
                            <button class="basket-btn">Sepete Ekle</button>
                        </div>
                    </div>
                </div>    
                `;

                // Initialize Swiper for big images
                var bigImageSwiper = new Swiper('.big-image-swiper', {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    on: {
                        init: function () {
                            hideThumbnails(); // Sadece bir resmi göstermek için küçük resimleri gizleyin
                        },
                        transitionEnd: function () {
                            hideThumbnails(); // Sadece bir resmi göstermek için küçük resimleri gizleyin
                        },
                    },
                });

                // Initialize Swiper for thumbnails
                var thumbnailsSwiper = new Swiper('.thumbnails-swiper', {
                    loop: true,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    slideToClickedSlide: true,
                });

                // Synchronize both Swipers
                bigImageSwiper.on('slideChange', function () {
                    var activeIndex = bigImageSwiper.activeIndex;
                    thumbnailsSwiper.slideTo(activeIndex);
                });

                thumbnailsSwiper.on('slideChange', function () {
                    var activeIndex = thumbnailsSwiper.activeIndex;
                    bigImageSwiper.slideTo(activeIndex);
                });

            } else {
                var productDetailsDiv = document.getElementById("product-details");
                productDetailsDiv.innerHTML = "<p>Product not found.</p>";
            }
        });
});

// ...

function hideThumbnails() {
    var activeIndex = bigImageSwiper.activeIndex;
    thumbnailsSwiper.slideTo(activeIndex, 0); // 0, geçiş efekti olmadan hemen küçük resmi gösterir
}
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function showBigImage(index) {
    var bigImageSwiper = document.querySelector('.big-image-swiper').swiper;
    bigImageSwiper.slideTo(index); // Tıklanan küçük resmin indeksiyle büyük resme geçiş yapılıyor
}
