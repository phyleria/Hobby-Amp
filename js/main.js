/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b89e9480d1msh9ed96d76cd7da4dp13a2f2jsn3e613b5f80dd',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

fetch('https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km', options)
    .then(response => response.json())
	.then(response => console.log(response))
    .catch(err => console.error(err));*/

	const restaurants = [
		"Tin Roof",
		"Java House",
		"MatBronze",
		"ArtCaffe",
		"Wasp & Sprout",
		"NewsCafe",
		"Cafe Deli",
		"CJ's",
		"Pallet",
		"Dorman's",
		"Coffee Sasa",
		"Le Grenier a Pain Cafe",
		"River Cafe",
		"Point Zero Cafe",
		"Cafe Latte",
		"Cafe Arabica",
		"Maples Oven",
		"Geco Cafe",
		"Ayira's NeoSoul Cafe",
		"Cafe Kaya"
	];
	
	const generateBtn = document.querySelector("#generate-btn");
	const result = document.querySelector("#result");
	
	generateBtn.addEventListener("click", () => {
		const randomIndex = Math.floor(Math.random() * restaurants.length);
		const randomRestaurant = restaurants[randomIndex];
		result.textContent = randomRestaurant;
	});
	