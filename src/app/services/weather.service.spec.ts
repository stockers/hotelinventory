import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { Weather } from '../weather';

// because constructor injects HttpClient and we want to mock http request/responses
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';


describe('WeatherService', () => {
  let httpTestingController: HttpTestingController;
  let service: WeatherService;

  beforeEach(() => { 
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[WeatherService, HttpClient]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(WeatherService);

  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return two weather objects', () => {
    // set up data
    const expectedWeathers : Weather[] = [
      {
        date : new Date("2023-12-15"),
        temperatureC: 32,
        temperatureF: 0,
        summary: "bloody freezing!"
      },
      {
        date : new Date("2023-12-16"),
        temperatureC: 37,
        temperatureF: 100,
        summary: "bloody roasting!"
      }
    ];

    // returned data array length to be expected length
    service.getWeathers().subscribe({
      next: data => expect(data.length).toBe(expectedWeathers.length),
      error: fail
    });
    
    // expect one get to this endpoint, and flush return the test data
    const req = httpTestingController.expectOne('/WeatherForecast/GetIt');
    expect(req.request.method).toBe('GET');
    req.flush(expectedWeathers);
  });
 
});
