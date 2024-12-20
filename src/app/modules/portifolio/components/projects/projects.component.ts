import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'Source da imagem do projeto',
      alt: 'Texto alternativo',
      title: 'Nome ao passar sobre a imagem',
      width: '100px',
      height: '51px',
      description:'Descricação',
      links:[
        {
          name:'Nome que ficará no butão',
          href: 'Link para o projeto'
        }
      ]
    }
  ]);
}
