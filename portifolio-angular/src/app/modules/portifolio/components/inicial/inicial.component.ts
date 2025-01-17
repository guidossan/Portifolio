import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SobreComponent } from '../sobre/sobre.component';

@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [CommonModule, SobreComponent],
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.scss'
})
export class InicialComponent {

}
