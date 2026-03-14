import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
   courses : string[]= ["Angular" , "React" , "Node" , "MongoDb"];
   showAll(){
    
   }
  constructor() { }

  ngOnInit(): void {
  }

}
