import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreditoService } from 'src/app/services/credito.service';
import { ValidatorService } from 'src/app/services/validator.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  ngOnInit(): void {

    this.creditoService.traerMonto().subscribe((res: any) => {
      if (res) {
        this.monto = res['total'];
        this.loading = false;
      }
    })
  }

  constructor(private fb: FormBuilder, private validator: ValidatorService, private creditoService: CreditoService) { }
  monto: number = 0;
  loading: boolean = true;
  Form = this.fb.group({
    nombre: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
    cedula: ['', [Validators.required]],
    monto: ['', [Validators.required, this.validator.diferenteCero]]
  })

  resultado: string[] = ["Aprobado", "No Aprobado"];

  submit() {
    if (this.Form.get('monto')?.value > this.monto) {
      swal.fire(
        'Error',
        'El monto solicitado es mayor al monto que esta disponible por el banco',
        'error'
      )
      return;
    }
    if (this.obtenerResultado() !== "Aprobado") {
      swal.fire(
        'Error',
        'Su solicitud no fue aprobada',
        'error'
      )
      return;
    }
    this.loading = true;
    this.creditoService.crearSolicitud(this.Form.value).subscribe((res: any) => {
      if (res) {
        this.monto = this.monto - res['monto'];
        this.creditoService.cambiarMonto(this.monto).subscribe((res) => {
          this.loading = false;
          swal.fire(
            'Felicitaciones',
            'Su solicitud fue aprobada',
            'success'
          )
        });
        this.Form.reset();
      }
    })
  }

  cambioMonto(e: any) {
    this.Form.get('monto')?.setValue(e);
  }

  obtenerResultado() {
    return this.resultado[Math.floor(Math.random() * this.resultado.length)];
  }


}
