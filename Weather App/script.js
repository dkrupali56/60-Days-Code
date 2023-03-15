// API Key for OpenWeatherMap API
const API_KEY = 'YOUR_API_KEY_HERE';

// Get HTML elements
const locationInput = document.getElementById('location');
const submitButton = document.getElementById('submit');
const currentWeather = document.getElementById('current-weather');
const weatherIcon = document.getElementById('weather-icon');
const weatherDetails = document.getElementById('weather-details');
const forecastDetails = document.getElementById('forecast-details');

// Event listener for form submission
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  // Get location input value
  const location = locationInput.value;
  // Call API to get weather data
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units