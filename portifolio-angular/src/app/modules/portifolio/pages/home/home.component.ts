import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { InicialComponent } from "../../components/inicial/inicial.component";
import { SobreComponent } from "../../components/sobre/sobre.component";
import { ServicosComponent } from "../../components/servicos/servicos.component";
import { ContatoComponent } from "../../components/contato/contato.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, InicialComponent, ServicosComponent, ContatoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
