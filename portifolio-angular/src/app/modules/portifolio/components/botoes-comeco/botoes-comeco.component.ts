import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botoes-comeco',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botoes-comeco.component.html',
  styleUrl: './botoes-comeco.component.scss'
})
export class BotoesComecoComponent {
  @Input() textoBotao!: string;
  @Input() link!: string;
  @Input() cssBotao!: string;
  @Input() path!: string;
}
