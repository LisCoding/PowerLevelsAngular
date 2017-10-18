import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css']
})
export class SuperSaiyanComponent implements OnInit, OnChanges {
  @Input() myPower;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.myPower = this.myPower * 10;
};

}
