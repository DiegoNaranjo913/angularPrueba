import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-montos',
  templateUrl: './lista-montos.component.html',
  styleUrls: ['./lista-montos.component.css']
})
export class ListaMontosComponent {

  @Output() cambioMonto = new EventEmitter<number>();

  valores: number[] = [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000]

  constructor() { }

  cambiarMonto(e: any) {
    this.cambioMonto.emit(e.value);
  }

}
