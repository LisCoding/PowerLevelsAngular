import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnChanges, OnInit{
  @Input() myPower;

  constructor() { }

  ngOnChanges() {

};
ngOnInit(){
  
}
}
