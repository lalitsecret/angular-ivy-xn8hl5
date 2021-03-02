import { Component, VERSION } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  products:any[]=[]
  left:any[]=[]


  constructor(private http:HttpClient)
  {
  	this.http.get("./data.json").subscribe((data:any)=>
  		this.products=data.products
  		this.left=data.left
  	)
  }
}
