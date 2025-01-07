import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public arrayProjects = signal<IProjects[]>([
    {
      src: '/assets/projects/shop.svg',
      alt: 'Projeto de eccomarce',
      title: 'API de eccomarce',
      width: '100px',
      height: '51px',
      description: 'Um projeto destinado ao desenvolvimento de uma API que simula um eccomarce de whey protein. Englobando e interagindo com recursos de clientes , produtos e pedidos.',
      links: [
        {
          name: 'API de eccomarce',
          href: 'https://github.com/Matheus-Nardi/iron-forge_tp1'
        }
      ]
    },
    {
      src: '/assets/projects/car.svg',
      alt: 'Projeto caroneiros',
      title: 'API para o projeto caroneiros',
      width: '100px',
      height: '51px',
      description: 'O projeto desenvolvido permitiu que motoristas divulgassem suas vagas, definissem horários de saída, valores e outros detalhes de forma organizada e acessível. Por outro lado, os passageiros puderam encontrar caronas disponíveis sem precisar vasculhar entre centenas de mensagens, tornando o processo muito mais eficiente e conveniente.',
      links: [
        {
          name: 'API Caroneiros',
          href: 'https://github.com/Matheus-Nardi/caroneirosAPI'
        }
      ]
    },
    {
      src: '/assets/projects/ong.svg',
      alt: 'Projeto Bem te Quero',
      title: 'Website para um projeto social',
      width: '100px',
      height: '51px',
      description: 'Este projeto tem como objetivo desenvolver um website para a ONG Bem te quero, uma organização comprometida com causas sociais que atua em Porto Nacional (TO). O site busca aumentar a visibilidade da ONG e oferecer um espaço para informações essenciais sobre suas atividades, programas e maneiras de contribuir por meio de doações e trabalho voluntário.',
      links: [
        {
          name: 'Website BemTeQuero',
          href: 'https://github.com/Matheus-Nardi/website-bemtequero'
        }
      ]
    }
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
