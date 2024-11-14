import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'ESPONJAS PARA MAQUILLAJE',
      descripcion: 'Pack de dos esponjas, colores al azar',
      precio: 5.200,
      imagen: 'P1.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'RUBOR EN CREMA',
      descripcion: '4 colores para elegir.',
      precio: 2000,
      imagen: '/P2.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'CORRECTOR CITY GIRL',
      descripcion: '4 tonos para elegir',
      precio: 7000,
      imagen: '/P3.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'MASCARA DE PESTAÑAS',
      descripcion: 'Aprueba de agua',
      precio: 5000,
      imagen: '/P4.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'TINTA PARA LABIOS',
      descripcion: 'Nuevo ingrese, 4 tonos distintos',
      precio: 2500,
      imagen: '/P5.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'LABIAL MATE FIRE',
      descripcion: 'Colores calidos (6 tonos)',
      precio: 3500,
      imagen: '/P6.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'LABIAL MATE FUSION',
      descripcion: 'Tonos rosas y violetas (4 tonos)).',
      precio: 3000,
      imagen: '/P7.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'BASE LIQUIDA LOVELY',
      descripcion: '7 tonos para elegir',
      precio: 8000,
      imagen: '/P8.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    }
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}
