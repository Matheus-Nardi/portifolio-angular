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
      text: "<p> AAAA </p>"
    },
    {
      summary: {
        strong: "Monitor Particular",
        p: "UNITINS | SET 2024 - DEZ 2024"
      },
      text: ""
    },
  ])
}
