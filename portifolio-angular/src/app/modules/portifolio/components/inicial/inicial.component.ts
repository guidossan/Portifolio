import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SobreComponent } from '../sobre/sobre.component';
import { BotoesComecoComponent } from "../botoes-comeco/botoes-comeco.component";

@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [CommonModule, SobreComponent, BotoesComecoComponent],
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.scss'
})
export class InicialComponent {

}
