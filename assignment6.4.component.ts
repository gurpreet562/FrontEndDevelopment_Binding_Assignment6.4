import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  firstname:string;
  lastname:string;
  title;
  ngOnInit(){
    this.firstname=" sakshi ",
    this.lastname="kumari",
    this.title="Miss"
    }
  login(firstname:string,lastname:string,title:string){
  title=this.title;
    alert(title+" " +firstname+" "+lastname);
    
    
  }
}