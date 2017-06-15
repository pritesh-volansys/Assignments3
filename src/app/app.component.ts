import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 showp = false;
 indexs = [];

onClikButton(){
this.showp = !this.showp;
this.indexs.push(this.indexs.length + 1); 
}

}
