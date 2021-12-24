
class Forecast{
    constructor(){
        this.key ='vgAWsFAGvEWVwTZvvmlgQyK1rnUAL8rF';
        this.cityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherUrl ='http://dataservice.accuweather.com/currentconditions/v1/';
    }
    async newCity(city){
        const cityDetails = await this.getCity(city);
        const weather = await this.getCondition(cityDetails.Key);
        return {cityDetails, weather};
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityUrl + query);
        const data = await response.json();
        return data[0];
       
    }
    async getCondition(citykey){
        const query = `${citykey}?apikey=${this.key}`
        const response = await fetch(this.weatherUrl+query);
        const data = await response.json();
        return data[0];
    }
}
