import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  msg = "";

  showMsg(){
    this.msg = "Welcome To Angular Training"
    setTimeout(()=>{
      this.msg="";
    } , 10000)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
