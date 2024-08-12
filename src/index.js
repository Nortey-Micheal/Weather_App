import './index.css';
import loading from './images/loading.gif';
import cloudy from './images/weatherConditions/cloudy1.jpg';
import sunny from './images/weatherConditions/sunny.webp';
import rainy from './images/weatherConditions/rainy1.jpg';
import foggy from './images/weatherConditions/foggy.webp';
import dark from './images/darkWeather.webp';
import partially_cloudy from './images/weatherConditions/partly_cloudy.jpg'

const cloudy1 = new Image()
cloudy1.src = cloudy

const sunny1 = new Image()
sunny1.src = sunny

const rainy1 = new Image()
rainy1.src = rainy

const foggy1 = new Image()
foggy1.src = foggy

const dark1 = new Image()
dark1.src = dark

const partially_cloudy1 = new Image()
partially_cloudy1.src = partially_cloudy

const body = document.querySelector('body')
const footer = document.querySelector('footer')
const searchArea = document.querySelector("#area");
const searchBtn = document.querySelector('button');
const location = document.querySelector('#location');
const weatherCondi = document.querySelector('#weather');
const temp = document.querySelector('#temp');
const humidity = document.querySelector('#humidity');
const imageDiv = document.querySelector('footer>div>div')

const img = new Image();
img.src = loading;
imageDiv.appendChild(img)

async function GetWeather () {
    try {
        
        const area = searchArea.value;
        const weather = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+area+'?key=C6HX7ZRDQ6HDEX5J9P5PYR6W9' ,{mode: 'cors'});
        const weatherData = await weather.json();
        location.innerText = weatherData.address.toUpperCase();
        weatherCondi.innerText = weatherData.currentConditions.conditions;
        temp.innerText = weatherData.currentConditions.temp;
        humidity.innerText = weatherData.currentConditions.humidity;
        console.log(weatherData);
        
    } catch (error) {
        alert('No Data Found');
    }
}

async function GetWeatherAndIcon () {
    footer.style.display = 'block';
    await GetWeather();

    switch (weatherCondi.innerText.toUpperCase()) {
        case 'CLOUDY':
            body.style.backgroundImage = `url(${cloudy})`;
            footer.style.display = 'none';
            break;

        case 'WINDY':
            body.style.backgroundImage = `url(${windy})`;
            footer.style.display = 'none';
            break;

        case 'RAINY':
            body.style.backgroundImage = `ulr(${rainy})`;
            footer.style.display = 'none';
            break;

        case 'SUNNY':
            body.style.backgroundImage = `url(${sunny})`;
            body.style.color = '#000000';
            footer.style.display = 'none';
            break;

        case 'PARTIALLY CLOUDY':
            body.style.backgroundImage = `url(${partially_cloudy})`;
            body.style.color = '#000000';
            footer.style.display = 'none';
            break;

        case 'FOGGY':
            body.style.backgroundImage = `url(${foggy})`;
            footer.style.display = 'none';
        default:
            body.style.backgroundImage = `url(${dark})`;
            body.style.color = '#ffffff';
            footer.style.display = 'none';
            break;
    }
}

searchBtn.addEventListener('click', () => {
    GetWeatherAndIcon();
    searchArea.value = '';
})