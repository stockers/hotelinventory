import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {  
  constructor() { }

  isLoggedIn : Boolean = false;  
  isAdmin : Boolean = false;

  login(email: string, password:string) : Boolean {
    this.isLoggedIn = false;
    this.isAdmin = false;
    if(email==="admin@gmail.com" && password==="Admin") {
      alert("login successful");
      this.isLoggedIn = true;
      this.isAdmin = true;
    }    
    if(email==="user@gmail.com" && password==="User") {
      alert("login successful");
      this.isLoggedIn = true;
      this.isAdmin = false;
    }    

    return this.isLoggedIn;
  }

}
