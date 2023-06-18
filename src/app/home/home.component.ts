import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  time: string="";
  ngOnInit(){
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    if (currentYear>2023){
      this.time = (currentYear - 2022).toString() + " years";
    } else{
      this.time = "1 year";
    }
  }
}
