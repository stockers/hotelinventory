import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  constructor() { }
  data : Subject<string> = new Subject<string>()
  subject$ = this.data.asObservable();
  
  setData(data : string) {
    this.data.next(data);
  }
}
