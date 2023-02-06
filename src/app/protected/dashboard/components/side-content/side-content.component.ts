import { Component } from '@angular/core';

@Component({
  selector: 'app-side-content',
  templateUrl: './side-content.component.html',
  styleUrls: ['./side-content.component.scss']
})
export class SideContentComponent {

  selectedId: undefined| number = undefined;

  carreras = [
    {
      nombre: 'Ingeniería en Sistemas Computacionales',
      id: 1
    },
    {
      nombre: 'Ingeniería en Mecatrónica',
      id: 2
    },
    {
      nombre: 'Ingeniería en Energías Renovables',
      id: 3
    },
    {
      nombre: 'Ingeniería en Gestión Empresarial',
      id: 4
    },
    {
      nombre: 'Ingeniería en Gestión Ambiental',
      id: 5
    },
    {
      nombre: 'Ingeniería en Gestión de la Calidad',
      id: 6
    },
    {
      nombre: 'Ingeniería en Gestión de la Tecnología de la Información',
      id: 7
    },
    {
      nombre: 'Ingeniería en Gestión de la Tecnología de la Información',
      id: 8
    },
    {
      nombre: 'Ingeniería en Gestión de la Tecnología de la Información',
      id: 9
    },
  ]

}
