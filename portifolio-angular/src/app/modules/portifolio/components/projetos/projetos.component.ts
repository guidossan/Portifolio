import { Component, signal } from '@angular/core';
import { IProjetos } from '../../interface/IProjetos.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {
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
}
