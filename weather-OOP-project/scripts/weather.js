const form = document.querySelector('form');
const template = document.querySelector('div');
const image = document.querySelector('.weather');
const icon = document.querySelector('.icon');
const forecast = new Forecast;

const updateUi= (data)=> {
  const {cityDetails, weather} = data
    html = `
    <p>${cityDetails.EnglishName}</p>
    <p>${weather.WeatherText}</p>
    <p>${weather.Temperature.Metric.Value} &deg; C</p>`;

    template.innerHTML = html;
  if(weather.IsDayTime){
    image.setAttribute('src','images/day.svg')
  } else {
    image.setAttribute('src','images/night.svg')
  }
  
  const iconsrc = `images/icons/${weather.WeatherIcon}.svg`
  icon.setAttribute('src',iconsrc);
  
};




form.addEventListener('submit', e => {
    e.preventDefault();
    const city = form.search.value.trim();
    form.reset();
  
  
    forecast.newCity(city)
      .then(data => updateUi(data))
      .catch(err => console.log(err));

      localStorage.setItem('city', city);
     
})

 
if(localStorage.getItem('city')){
  forecast.newCity(localStorage.getItem('city'))
  .then(data => updateUi(data))
  .catch(err => console.log(err));
} 
