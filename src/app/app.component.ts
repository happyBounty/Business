import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'business';
  Is_dashboard = 0;
  setDashBoard(p_Dash)
  {
    this.Is_dashboard = p_Dash;
  }

}
