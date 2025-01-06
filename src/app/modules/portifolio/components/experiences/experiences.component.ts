import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Jovem Aprendiz",
        p: "UNITINS | NOV 2024 - Atualmente"
      },
      text: "<p> Atuo no setor de TI, oferecendo suporte técnico aos usuários, solucionando dúvidas e atendendo chamados em geral. Sou responsável por auxiliar a organização e manutenção dos laboratórios de informática, realizando tarefas como formatação de computadores e garantindo o funcionamento adequado dos equipamentos. </p>"
    },
    {
      summary: {
        strong: "Monitor Particular",
        p: "UNITINS | SET 2024 - DEZ 2024"
      },
      text: "<p> Ofereci assistência individual a um aluno do curso de Sistemas de Informação, auxiliando no entendimento e na aplicação de conceitos teóricos e práticos. Foquei em uma comunicação clara e eficaz para promover o aprendizado e ajudar o aluno a superar desafios acadêmicos. </p>"
    },
  ])
}
