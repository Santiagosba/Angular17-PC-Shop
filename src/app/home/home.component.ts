import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  computersImageUrl = '\assets\images\Laptops.jpeg';
  computersDescription = `
    Bienvenido a nuestra tienda en línea de computadoras, donde encontrarás una amplia selección de equipos
    informáticos para todas tus necesidades. Desde potentes PCs para juegos hasta portátiles ultradelgadas
    para trabajo en movimiento, tenemos todo lo que necesitas para mantenerte conectado y productivo.

    Nuestro catálogo incluye las últimas novedades en tecnología informática, con marcas de renombre y
    configuraciones personalizadas disponibles para adaptarse a tus necesidades específicas. Ya sea que estés
    buscando actualizar tu equipo actual o comprar una nueva computadora para tus proyectos, estamos aquí
    para ayudarte a encontrar la opción perfecta.

  `;
  images = [
    [
      { src: 'https://www.example.com/computer1.jpg', alt: 'Computadora 1' },
      { src: 'https://www.example.com/computer2.jpg', alt: 'Computadora 2' }
    ],
    [
      { src: 'https://www.example.com/computer3.jpg', alt: 'Computadora 3' },
      { src: 'https://www.example.com/computer4.jpg', alt: 'Computadora 4' }
    ]
  ];
}
