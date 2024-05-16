import { Injectable, signal } from '@angular/core';
import { Computer } from '../computers';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  pc = signal<Computer[]>([]);

  constructor() {}

  // Nuevo método para añadir un computador a la lista
  addComputer(computer: Computer) {
    const currentComputers = this.pc(); // Obtener la lista actual de computadoras
    this.pc.set([...currentComputers, computer]); // Agregar la nueva computadora a la lista
  }

  getComputers(): Computer[] {
    return this.pc();
  }
}
