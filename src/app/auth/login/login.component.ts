import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userAuth: UserAuthService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log('Login in progress');
    const email = form.value.email;
    const password = form.value.password;
    this.userAuth.loginUser(email, password);
  }

}
