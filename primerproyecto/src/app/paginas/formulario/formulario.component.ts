import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from '../../servicio/formulario.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  constructor(private formularioService: FormularioService, private router: Router) {}

  realizarCompra() {
    alert('Compra realizada exitosamente!');
    this.router.navigate(['/home']); // Navegar al componente Formulario
}
}

