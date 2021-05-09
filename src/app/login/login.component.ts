import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
  }
  loginButtonclicked($event) {
    console.log("LogIn component:loginbuttonclicked\n" + "username:" + this.username + "\n" + "password:" + this.password + "\n" + "email:" + this.email);
    if(this.username == "kmh")
      this.router.navigate(['dashboard']);
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
