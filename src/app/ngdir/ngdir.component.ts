import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngdir',
  templateUrl: './ngdir.component.html',
  styleUrls: ['./ngdir.component.css']
})
export class NgdirComponent implements OnInit {
  show = false;
  showDetails(){
    this.show = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
