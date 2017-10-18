import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  power: number;
  powerTwo: number;

  onSubmit(){
    console.log("I was submitted")
    this.powerTwo = this.power;
    console.log(this.power);
  }

  constructor() { }

  ngOnInit() {
  this.power = 10;
  this.powerTwo = this.power;
  }

}
