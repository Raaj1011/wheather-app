function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key from OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
        })
        .catch(error => console.error('Error:', error));
}
