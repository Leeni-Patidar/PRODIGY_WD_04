document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '38d45f29f731b3bfb4b51dd98823d1e2';
    const searchButton = document.getElementById('search-button');
    const locationInput = document.getElementById('location-input');
    const locationName = document.getElementById('location-name');
    const weatherDescription = document.getElementById('weather-description');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');
    const weatherInfo = document.querySelector('.weather-info');

    searchButton.addEventListener('click', () => {
        const location = locationInput.value.trim();
        if (location) {
            fetchWeatherData(location);
        }
    });

    function fetchWeatherData(location) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    displayWeatherData(data);
                } else {
                    alert('Location not found. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data. Please try again.');
            });
    }

    function displayWeatherData(data) {
        locationName.textContent = data.name;
        weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

        weatherInfo.style.display = 'block';
    }
});
