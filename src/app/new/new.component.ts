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
  }

  constructor() { }

  ngOnInit(): void {
  }

}
