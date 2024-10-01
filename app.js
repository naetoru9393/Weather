document.getElementById('fetchWeather').addEventListener('click', fetchWeather);

async function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '5dae7c6b09194f24918300bc67dc6fc3'; // あなたのAPIキーに置き換えてください
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        
        const weatherResult = document.getElementById('weatherResult');
        weatherResult.innerHTML = `
            <h2>${data.name}の天気</h2>
            <p>気温: ${data.main.temp}°C</p>
            <p>天気: ${data.weather[0].description}</p>
            <p>湿度: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        console.error('天気データ取得中にエラーが発生しました:', error);
        alert('天気情報を取得できませんでした。都市名を確認してください。');
    }
}
