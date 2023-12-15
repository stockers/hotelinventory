import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { RoomsService } from '../services/rooms.service';

// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


describe('RoomsComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let roomsService: RoomsService;
  let component: RoomsComponent;
  let activatedRoute: ActivatedRoute | null;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule, RoomsComponent],
      // Provide the service-under-test and its dependencies
      providers: [RoomsService]              
    }).compileComponents();

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    roomsService = TestBed.inject(RoomsService);
    activatedRoute = TestBed.inject(ActivatedRoute, null);
    
    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
