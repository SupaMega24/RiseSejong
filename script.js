const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
        const city = 'YOUR_CITY'; // Replace 'YOUR_CITY' with the city for which you want weather information
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${Sejong}&units=metric&appid=${c0bd47e4fb7cc82bb45eca26a14d40b2}`;

        // Function to fetch weather data from the API
        async function getWeatherData() {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                const weatherInfo = `City: ${data.name}<br>Temperature: ${data.main.temp}°C<br>Weather: ${data.weather[0].description}`;
                document.getElementById('weather').innerHTML = weatherInfo;
            } catch (error) {
                console.error('Error fetching weather data:', error);
                document.getElementById('weather').innerHTML = 'Error fetching weather data';
            }
        }

        // Call the function to get weather data when the page loads
        getWeatherData();