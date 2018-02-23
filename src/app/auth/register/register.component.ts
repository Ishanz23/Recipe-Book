import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userAuth: UserAuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('Registration in progress');
    const email = form.value.email;
    const password = form.value.password;
    this.userAuth.registerUser(email, password);
  }
}
