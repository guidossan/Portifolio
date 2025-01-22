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
      imgSrc:"../../../../../assets/img/projects/vfull.png",
      alt:"Projeto ReactJava",
      tittle:"ReactJava",
      width:"100px",
      height:"100px",
      description:"Descrição do projeto",
      links: [
        {
          name: "Github",
          href:"https://github.com/guidossan/Projeto-React-Java",
        },
      ],
    },
    {
      imgSrc:"../../../../../assets/img/projects/vfull.png",
      alt:"Projeto ReactJava",
      tittle:"ReactJava",
      width:"100px",
      height:"100px",
      description:"Descrição do projeto",
      links: [
        {
          name: "Github",
          href:"https://github.com/guidossan/Projeto-React-Java",
        },
      ],
    },{
      imgSrc:"../../../../../assets/img/projects/vfull.png",
      alt:"Projeto ReactJava",
      tittle:"ReactJava",
      width:"100px",
      height:"100px",
      description:"Descrição do projeto",
      links: [
        {
          name: "Github",
          href:"https://github.com/guidossan/Projeto-React-Java",
        },
      ],
    },{
      imgSrc:"../../../../../assets/img/projects/vfull.png",
      alt:"Projeto ReactJava",
      tittle:"ReactJava",
      width:"100px",
      height:"100px",
      description:"Descrição do projeto",
      links: [
        {
          name: "Github",
          href:"https://github.com/guidossan/Projeto-React-Java",
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
