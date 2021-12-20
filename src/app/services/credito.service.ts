import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitud } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  constructor(private http: HttpClient) { }


  crearSolicitud(solicitud: Solicitud) {
    return this.http.post('http://localhost:3000/creditos', { ...solicitud })
  }

  traerMonto() {
    return this.http.get('http://localhost:3000/montoTotal')
  }

  cambiarMonto(monto: number) {
    return this.http.post('http://localhost:3000/montoTotal', { "total": monto })
  }

  traerSolicitudes() {
    return this.http.get('http://localhost:3000/creditos')
  }

  eliminarSolicitud(id: number) {
    return this.http.delete('http://localhost:3000/creditos/' + id)
  }
}
