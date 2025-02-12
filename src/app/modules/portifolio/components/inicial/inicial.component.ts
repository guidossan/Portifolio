import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SobreComponent } from '../sobre/sobre.component';
import { BotoesComecoComponent } from "../botoes-comeco/botoes-comeco.component";
import { ProjetosComponent } from "../projetos/projetos.component";
import { ServicosComponent } from "../servicos/servicos.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [CommonModule,TranslateModule, BotoesComecoComponent, ProjetosComponent, SobreComponent, ServicosComponent],
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.scss'
})
export class InicialComponent {

}
