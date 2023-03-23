const calorieForm = document.querySelector('#calorie-form');
const calorieList = document.querySelector('#calorie-list');
const totalCalories = document.querySelector('#total-calories');
let caloriesArr = [];

calorieForm.addEventListener('submit', addCalories);
calorieList.addEventListener('click', deleteCalories);

function addCalories(e) {
	e.preventDefault();
	const foodItem = document.querySelector('#food-item').value;
	const calories = parseInt(document.querySelector('#calories').value);

	if (foodItem === '' || isNaN(calories)) {
		alert('Please enter a valid food item and calorie amount');
		return;
	}

	const calorieItem = {
		food: foodItem,
		calories: calories
	};

	caloriesArr.push(calorieItem);
	updateCalorieList();
	updateTotalCalories();
	calorieForm.reset();
}

function updateCalorieList() {
	calorieList.innerHTML = '';

	caloriesArr.forEach((item, index) => {
		calorieList.innerHTML += `
			<li>
				<span>${item.food}: ${item.calories} calories</span>
				<button data-index="${index}">x</button>
			</li>
		`;
	});
}

function deleteCalories(e) {
	if (e.target.tagName === 'BUTTON') {
		const index = e.target.getAttribute('data-index');
		caloriesArr.splice(index, 1);
		updateCalorieList();
		updateTotalCalories();
	}
}

function updateTotalCalories() {
	const total = caloriesArr.reduce((acc, item) => acc + item.calories, 0);
	totalCalories.innerText = total;
}
