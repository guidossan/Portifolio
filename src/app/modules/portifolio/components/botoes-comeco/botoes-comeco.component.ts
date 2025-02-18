import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-botoes-comeco',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './botoes-comeco.component.html',
  styleUrl: './botoes-comeco.component.scss'
})
export class BotoesComecoComponent {
  @Input() textoBotao!: string;
  @Input() link!: string;
  @Input() cssBotao!: string;
  @Input() path!: string;
}
