import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherInfo } from '../model/Weather';
@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    constructor(private httpClient: HttpClient){}

    retrieveWeatherInformation(cityName: string){
    return this.httpClient.get<WeatherInfo>(`${environment.api_URL}/${cityName}`, {
      headers: new HttpHeaders().
                set(environment.XRapidApiHostHeader, environment.XRapidAPIHostValue).
                set(environment.XRapidApiKeyHeader, environment.XRapidAPIKey).
                set("mode", "json")
        });
    }
}