import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Icone do Java'
    },
    {
      src: 'assets/icons/knowledge/quarkus.svg',
      alt: 'Icone do Quarkus'
    },
    {
      src: 'assets/icons/knowledge/html.svg',
      alt: 'Icone do Html'
    },
    {
      src: 'assets/icons/knowledge/css.svg',
      alt: 'Icone do Css'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone do Angular'
    }
  ]);
}
