import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-monto',
  templateUrl: './monto.component.html',
  styleUrls: ['./monto.component.css']
})
export class MontoComponent implements OnInit {

  @Input() monto: number = 100000;

  constructor() { }

  ngOnInit(): void {
  }

}
