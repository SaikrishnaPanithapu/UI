import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  popover() {
    $('[data-toggle="popover"]').popover();
  }
  getProfile(){
    alert("qqqq");
  }
}
