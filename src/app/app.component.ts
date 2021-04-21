import { Component } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SmartHomeTEC-Webapp';
  res1: Array<any> = [];
  constructor( public json: JsonService) {
    this.json.getJson().subscribe((res: any) => {
      console.log(res);
      this.res1 = res;
    });
  }
}

