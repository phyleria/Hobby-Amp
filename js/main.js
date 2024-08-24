const restaurants = [
    "Carnivore",
    "Talisman",
    "Urban Eatery",
    "Lord Delamere Terrace",
    "Lucca Restaurant",
    "Tamarind Nairobi",
    "Mawimbi Seafood Restaurant",
    "About Thyme",
    "Fogo Gaucho",
    "Nyama Mama",
    "Mercado - Mexican Kitchen and Bar",
    "Seven Seafood & Grill",
    "Mediterraneo Ristorante",
    "Baluba Restaurant",
    "Tin Roof Café Karen"
];

const cafes = [
    "Artcaffe",
    "Java House",
    "CJ’s",
    "News Cafe",
    "Wasp & Sprout",
    "Le Grenier à Pain",
    "Connect Coffee Roasters",
    "Zucchini Greengrocers & Coffee Shop",
    "Pallet Cafe",
    "Coffee Casa",
    "River Cafe",
    "Point Zero Cafe",
    "Kaldis Coffee House",
    "Kesh Kesh Coffee House",
    "Boho Eatery"
];

const restaurantBtn = document.querySelector("#restaurant-btn");
const cafeBtn = document.querySelector("#cafe-btn");
const result = document.querySelector("#result");

function displayResult(place) {
    result.textContent = place;

    setTimeout(() => {
        result.textContent = '';
    }, 5000);
}

restaurantBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];
    displayResult(randomRestaurant);

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.2, y: 0.8 } 
    });
});

cafeBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * cafes.length);
    const randomCafe = cafes[randomIndex];
    displayResult(randomCafe);

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.2, y: 0.8 } 
    });
});

let currentImageIndex = 0;
const images = document.querySelectorAll('.slide-image');

function updateImages() {
    images.forEach((image, index) => {
        image.classList.remove('active-image');
        image.classList.add('opacity-50', 'scale-75');
    });

    const previousIndex = (currentImageIndex - 1 + images.length) % images.length;
    const nextIndex = (currentImageIndex + 1) % images.length;

    images[previousIndex].style.transform = 'translateX(-150%) scale(0.75)';
    images[currentImageIndex].classList.add('active-image');
    images[currentImageIndex].classList.remove('opacity-50', 'scale-75');
    images[nextIndex].style.transform = 'translateX(150%) scale(0.75)';

    images[previousIndex].style.display = 'block';
    images[currentImageIndex].style.display = 'block';
    images[nextIndex].style.display = 'block';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImages();
}

updateImages(); // Initialize first state
setInterval(showNextImage, 3000); // Change image every 3 seconds
