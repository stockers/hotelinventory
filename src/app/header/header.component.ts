import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../weather';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'hinv-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor (private weatherService : WeatherService, private router:Router) {}

  title : string = '';  
  weathers : Weather[] = [];

  ngOnInit(): void {
    console.log('getting weathers');
    //this.weathers = this.weatherService.getWeathers();
    this.weatherService.getWeathers().subscribe(data=> { this.weathers = data});
    console.log('got weathers');

    this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe((event) => {console.log('Navigation Started') });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {console.log('Navigation Ended') });
  
  }
  
}
