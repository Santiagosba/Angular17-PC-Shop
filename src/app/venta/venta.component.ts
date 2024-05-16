import { Component } from '@angular/core';
import { Computer } from '../computers';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-venta',
  standalone: true,
  imports: [],
  templateUrl: './venta.component.html',
  styleUrl: './venta.component.css'
})
export class VentaComponent {

  pc: Computer[] = [];

  constructor(private servicio: ServicioService) { };

  ngOnInit() {
    this.pc = this.servicio.pc();
    console.log("pc:", this.pc);
  }

}
