import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Request';
  url = 'http://ip-api.com/json';
  data = '';

  constructor(private http: HttpClient){}

  async get_data(){
    const data = await this.http.get(this.url).toPromise();
    console.log(data)
    this.data = '\n';
    for(var k in data) {
      this.data += k.toString() + ' = ' + data[k] + '\n'
    }
  }
}
