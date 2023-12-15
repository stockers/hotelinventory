import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ElementRef, Inject, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContainerComponent } from './container/container.component';

import { storageToken} from './storage.token';
import { FormsModule } from '@angular/forms';
import { AppNavComponent } from './app-nav/app-nav.component';


@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterModule, RoomsComponent, EmployeeComponent, ContainerComponent, AppNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit, AfterViewInit {
  title = 'hotelinventoryapp';
  role = "Admin";

  @ViewChild('mycomponent', { read: ViewContainerRef } ) vcr! : ViewContainerRef;  
  @ViewChild('myelement', {static : true}) er! : ElementRef;

  constructor(@Inject(storageToken) private storage: Storage) {

  }
  ngAfterViewInit() {
    //const componentRef = this.vcr.createComponent(RoomsComponent);
    //console.log(componentRef.instance.numberOfRooms);

    
  }
  ngOnInit() {
    this.storage.setItem('name', 'Hilton Hotel');
    //const elementRef = this.er.nativeElement;
    //elementRef.innerText = "HELLO!";
  }
}
