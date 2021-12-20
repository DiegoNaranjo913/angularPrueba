import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Solicitud } from 'src/app/interfaces/interfaces';
import { CreditoService } from 'src/app/services/credito.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [];
  registro: Solicitud[] = [];
  responsive: boolean = false;
  monto!: number;
  loading: boolean = true;
  dataSource = new MatTableDataSource<Solicitud>(this.registro);
  constructor(private creditoService: CreditoService, private observer: BreakpointObserver) {

  }

  ngOnInit(): void {
    this.traerSolicitudes();
    this.creditoService.traerMonto().subscribe((res: any) => {
      if (res) {
        this.monto = res['total'];
        this.loading = false;
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.responsive = true;
        this.displayedColumns = ['id', 'nombre', 'monto', 'accion'];
      } else {
        this.responsive = false;
        this.displayedColumns = ['id', 'nombre', 'correo', 'monto', 'accion'];
      }
    });
  }

  pagar(id: number, monto: number) {
    this.loading = true;
    this.creditoService.eliminarSolicitud(id).subscribe((resp) => {
      this.monto = this.monto + monto
      this.creditoService.cambiarMonto(this.monto).subscribe((resp) => {
        this.loading = false;
        this.traerSolicitudes()
        swal.fire(
          'Felicitaciones',
          'Su Pago ha sigo exitoso',
          'success'
        )
      })
    })
  }

  traerSolicitudes() {
    this.creditoService.traerSolicitudes().subscribe((resp: any) => {
      this.dataSource.data = resp;
      this.dataSource.paginator = this.paginator;
    })
  }
}
