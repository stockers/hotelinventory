import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
import { EmailvalidatorDirective } from '../validators/emailvalidator.directive';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'hinv-login',
  standalone: true,
  imports: [FormsModule, JsonPipe, CommonModule, HoverDirective, JsonPipe, EmailvalidatorDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor (private router: Router, private loginService : LoginService) {}
email: string= "";
password: string = "";

  ngOnInit() : void {

  }

  login() {
    if(this.loginService.login(this.email, this.password))
    {
      alert("redirecting to room add");
      this.router.navigate(['/room','add']);
    }
  }
}
