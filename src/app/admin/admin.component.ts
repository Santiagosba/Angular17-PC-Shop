import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Computer } from '../computers';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private servicio: ServicioService) {}

  computersForm = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    descripcion: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ]),
    precio: new FormControl(0, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    ram: new FormControl(0, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    frecuencia_ram: new FormControl('', [Validators.required]),
    gpu: new FormControl('', [Validators.required]),
    cpu: new FormControl('', [Validators.required]),
    power_supply: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    referencia: new FormControl(''),
    imagen: new FormControl(''),
    isaAgree: new FormControl(false),
  });

  computers: Computer = {
    nombre: '',
    descripcion: '',
    precio: 0,
    ram: 0,
    frecuencia_ram: '',
    gpu: '',
    cpu: '',
    power_supply: '',
    categoria: '',
    imagen: '',
    referencia: '',
    isAggree: false,
  };

  onSubmit() {
    this.computers = {
      nombre: String(this.computersForm.value.nombre),
      descripcion: String(this.computersForm.value.descripcion),
      precio: Number(this.computersForm.value.precio),
      ram: Number(this.computersForm.value.ram),
      frecuencia_ram: String(this.computersForm.value.frecuencia_ram),
      gpu: String(this.computersForm.value.gpu),
      cpu: String(this.computersForm.value.cpu),
      power_supply: String(this.computersForm.value.power_supply),
      referencia: String(this.computersForm.value.referencia),
      categoria: String(this.computersForm.value.categoria),
      isAggree: Boolean(this.computersForm.value.isaAgree),
      imagen: String(this.computersForm.value.imagen),
    };

    this.servicio.addComputer(this.computers);
    console.log(this.servicio.pc());
    this.cleanForm();
  }

  cleanForm() {
    this.computersForm.reset();
  }
}
