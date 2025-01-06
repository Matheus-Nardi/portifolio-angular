import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-knowledge',
  imports: [MatTooltip],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Java',
      title: 'Java'
    },
    {
      src: 'assets/icons/knowledge/quarkus.svg',
      alt: 'Quarkus',
      title: 'Quarkus'
    },
    {
      src: 'assets/icons/knowledge/spring.svg',
      alt: 'Spring',
      title: 'Spring'
    },
    {
      src: 'assets/icons/knowledge/mysql.svg',
      alt: 'MySql',
      title: 'MySql'
    },
    {
      src: 'assets/icons/knowledge/postgresql.svg',
      alt: 'Postgresql',
      title: 'PostegreSQL'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone do Angular',
      title: 'Angular'
    }
  ]);
}
