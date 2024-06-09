import { hamburgerMenu } from './hamburger.js';
import { fetchProduct } from './fetch.js';
import { cookiesPopup } from './cookies.js';
import { subscribeValidation } from './subscribeValidation.js';

//  selected elements

const favoriteContainer = document.querySelector('.favorite-cards');
const slidesContainer = document.querySelector(".slide-container");











// favorite cards
function renderMainProductsCards(productsToRender, container) {
    const productCard = productsToRender.map((product, index) => `
        <div class="favorite-card ${index === 1 ? 'big-card' : ''}">
            <img src="${product.imgUrl}" alt="${product.name}">
            <div class="content-wrapper">
                <h3>${product.name}</h3>
                <div class="rate-container">
                    <div class="rate-satrs">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <p class="rate">${product.rate}</p>
                </div>
                <p class="price">Ár: ${product.price} Ft</p>
            </div>
        </div>  
        `).join("");
    container.innerHTML = productCard;
};


// render card
async function renderfavoriteCards() {

    const cards = await fetchProduct();
    const threeCards = cards.slice(0, 3);
    renderMainProductsCards(threeCards, favoriteContainer);
};




const fetchUrl = 'https://github.com/Thomas-Horvath/Thomas_Coffee_Corner_WebSite/blob/main/data/testimonials.json'

// testimonal section

//  fetch testimonals
async function fetchTestimonials() {
    try {
        const response = await fetch(fetchUrl);
        const testimonials = await response.json();
        renderSlides(testimonials);
        startSlideShow(testimonials);
    } catch (err) {
        console.error(err);
    };
};



// render testimonal cards
function renderSlides(testimonials) {
    slidesContainer.innerHTML = testimonials.map((testimonial, index) => `
        <div class="mySlides ${index === 0 ? 'active' : ''};">
            <img src="${testimonial.pictureUrl}" class="customerPic">
            <div class="text">
                <i class="fa-solid fa-quote-right"></i>
                <h3 class="customerName">${testimonial.name} <strong>(${testimonial.age})</strong></h3>
                <p>${testimonial.text}</p>
            </div>
        </div>
    `).join('');
};


function startSlideShow(testimonials) {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.mySlides');

    slides[currentIndex].classList.add('active');
    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % testimonials.length;
        slides[currentIndex].classList.add('active');
    }, 4000);
};


document.addEventListener("DOMContentLoaded", () => {
    fetchTestimonials()
    cookiesPopup();
});

subscribeValidation();
hamburgerMenu();
renderfavoriteCards();


