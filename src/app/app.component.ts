import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 username:string="Rupika"
 childData:string;
 parentMethod(data){
   this.childData=data;

 }
}
