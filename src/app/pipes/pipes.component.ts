import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  name= "vishal";
  date = new Date();
  salary=50000;
  constructor() { }

  ngOnInit(): void {
  }

}
