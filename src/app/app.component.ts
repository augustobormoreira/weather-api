import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherService } from './service/weather.service';
import { Weather, WeatherInfo } from './model/Weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-api';
  cityName!: string;
  cityTemp!: string;
  minTemp!: string;
  maxTemp!: string;
  humidity!: string;
  windSpeed!: string;
  
  weatherTemp! : number;
  weatherIsHot = false;

  constructor (private weatherService: WeatherService){}

  retrieveWeatherInformation(cityName: string){
    this.weatherService.retrieveWeatherInformation(cityName).subscribe((weatherData) => {
      this.cityName = weatherData.name;
      this.cityTemp = weatherData.main.temp + " F";
      this.weatherTemp = weatherData.main.temp;
      this.minTemp = weatherData.main.temp_min + " F";
      this.maxTemp = weatherData.main.temp_max + " F";
      this.humidity = weatherData.main.humidity + " %";
      this.windSpeed = weatherData.wind.speed + "mph";
      this.weatherIsHot = this.getWeatherColdOrHot();
      this.changeLowerConsoleBackGroundColor();
    })
  }

  getWeatherColdOrHot(){
    return (this.weatherTemp > 68);
  }

  changeLowerConsoleBackGroundColor(){
    if(this.weatherIsHot) return 'orange';

    return 'azure';
  }
}
