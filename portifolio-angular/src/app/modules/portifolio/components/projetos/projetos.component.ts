import { Component, inject, signal } from '@angular/core';
import { IProjetos } from '../../interface/IProjetos.interface';
import { CommonModule } from '@angular/common';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})

export class ProjetosComponent {
  #dialog = inject(MatDialog);
  public arrayProjetos = signal<IProjetos[]>([
    {
      imgSrc:"../../../../../assets/img/projects/ReactJava.png",
      alt:"Projeto React Java",
      tittle:"Projeto React Java",
      width:"429px",
      height:"261px",
      description:"Olá! Este é meu projeto inicial, desenvolvido em React com backend em Java. O projeto está containerizado com Docker, facilitando o manuseio, e planejo hospedá-lo na nuvem em breve. Caso queira conhecer mais a fundo, clique no link abaixo.",
      links: [
        {
          name: "Github",
          href:"https://github.com/guidossan/Projeto-React-Java",
        },
      ],
    },
    {
      imgSrc:"../../../../../assets/img/projects/angular2.png",
      alt:"Projeto Portifólio Angular",
      tittle:"Projeto Portifólio Angular",
      width:"100px",
      height:"100px",
      description:"Este é o meu portfólio, que está em constante aprimoramento e recebendo atualizações. Ele foi desenvolvido em Angular, um dos frameworks que tenha familiaridade. Caso queira conhecer mais a fundo, clique no link abaixo.",
      links: [
        {
          name: "Github",
          href:"https://github.com/guidossan/Portifolio",
        },
      ],
    },
  ]);
  public openDialog(data:IProjetos){
    this.#dialog.open(DialogComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
