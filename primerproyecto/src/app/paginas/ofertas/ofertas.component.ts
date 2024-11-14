import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { Producto } from '../../modelos/producto.model';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'SET DE BROCHAS GIRLY',
      descripcion: 'Pack de dos esponjas, colores al azar',
      precio: 4600,
      imagen: 'O1.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'SET DE ESPONJAS',
      descripcion: '2 colores para elegir.',
      precio: 3000,
      imagen: '/OO1.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'ALAJERO WUWUWUWU',
      descripcion: '20 compartimientos',
      precio: 20000,
      imagen: '/O2.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'ANTIFAZ DE FRUTAS',
      descripcion: 'Frutales y resfrecantes',
      precio: 5000,
      imagen: '/O3.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'LIP OIL MASK',
      descripcion: '4 tonos distintos',
      precio: 2500,
      imagen: '/O4.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'SOMBRA LIQUIDA SHINE',
      descripcion: 'Colores shiny (6 tono)',
      precio: 1200,
      imagen: '/O5.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}
