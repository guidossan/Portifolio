import { Component, inject, signal } from '@angular/core';
import { IProjetos } from '../../interface/IProjetos.interface';
import { CommonModule } from '@angular/common';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})

export class ProjetosComponent {
  #dialog = inject(MatDialog);
  public arrayProjetos = signal<IProjetos[]>([
    {
      imgSrc:"../../../../../assets/img/projects/ReactJava.png",
      alt: "pages.translate.projects.reactJava.alt",
      tittle: "pages.translate.projects.reactJava.title",
      width:"429px",
      height:"261px",
      description:"pages.translate.projects.reactJava.description",
      links: [
        {
          name: "pages.translate.projects.reactJava.name",
          href:"https://github.com/guidossan/Projeto-React-Java",
        },
      ],
    },
    {
      imgSrc:"../../../../../assets/img/projects/angular2.png",
      alt:"pages.translate.projects.portifolioAngular.alt",
      tittle:"pages.translate.projects.portifolioAngular.title",
      width:"100px",
      height:"100px",
      description:"pages.translate.projects.portifolioAngular.description",
      links: [
        {
          name: "pages.translate.projects.portifolioAngular.name",
          href:"https://github.com/guidossan/Portifolio",
        },
      ],
    },
    {
      imgSrc:"../../../../../assets/img/projects/lista-de-tarefas.png",
      alt:"pages.translate.projects.toDoList.alt",
      tittle:"pages.translate.projects.toDoList.title",
      width:"100px",
      height:"100px",
      description:"pages.translate.projects.toDoList.description",
      links: [
        {
          name: "pages.translate.projects.toDoList.name",
          href:"https://lorenzinitech-listatarefas.vercel.app/",
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
