import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showData($event) {

    console.log("LogIn component:loginbuttonclicked\n" + "username:" + this.username + "\n" + "password:" + this.password + "\n" + "email:" + this.email);
  }
  username = '';
  password = '';
  email = '';

  onKey(event: any) {
    switch (event.target.id) {
      case "username":
        this.username = event.target.value;
        break;
      case "password":
        this.password = event.target.value;
        break;
      case "email":
        this.email = event.target.value;
        break;
    }
    console.log(event.target.id + ":" + event.target.value);

  }
}
