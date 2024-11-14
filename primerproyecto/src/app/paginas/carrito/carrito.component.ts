import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importar Router
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito.component.html',
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: { producto: Producto; cantidad: number }[] = [];

  constructor(private carritoService: CarritoService, private router: Router) {} // Inyectar Router

  ngOnInit(): void {
    this.carritoService.carrito$.subscribe((productos) => {
      this.productosEnCarrito = productos;
    });
  }

  agregarCantidad(index: number) {
    this.productosEnCarrito[index].cantidad++;
  }

  quitarCantidad(index: number) {
    if (this.productosEnCarrito[index].cantidad > 1) {
      this.productosEnCarrito[index].cantidad--;
    }
  }

  eliminarProducto(productoId: number) {
    this.carritoService.eliminarDelCarrito(productoId);
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }

  realizarCompra() {
    alert('Compra realizada exitosamente!');
    this.vaciarCarrito();
    this.router.navigate(['/formulario']); // Navegar al componente Formulario
  }
}
