import { Injectable, SkipSelf } from '@angular/core';
import { Weather } from './../weather';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeathers() { // was Weather[] return type
    //environment.apiEndpoint
    let weathers : Weather [] = [
      {
        date: new Date("05-12-2023"),
        temperatureC: 32,
        temperatureF: 89,
        summary: "Bracing"
      },
      {
        date: new Date("06-12-2023"),
        temperatureC: 35,
        temperatureF: 91,
        summary: "Chilly"
      },      
    ];
    //console.log(environment.apiEndpoint);    
    return this.http.get<Weather[]>(environment.apiEndpoint + '/WeatherForecast/GetIt');
    
    //return weathers;
  }
}

