import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Fix typo: styleUrl -> styleUrls
})
export class LoginComponent {
  constructor(private router:Router){}
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.router.navigate(['/home'])
  }
}
