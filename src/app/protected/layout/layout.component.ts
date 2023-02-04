import { Component } from '@angular/core';
import { Carrera } from './interfaces/carrera.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  value: string = '';
  carreras: Carrera[] = [
    {id: 1, nombre: 'Ingeniería en Sistemas Computacionales'},
    {id: 2, nombre: 'Ingeniería en Mecatrónica'},
    {id: 3, nombre: 'Ingeniería en Mecánica Automotriz'},
    {id: 4, nombre: 'Ingeniería en Mecánica Industrial'},
  ];
  selectedCarrer!: Carrera;

  search(){
    console.log(this.value);
  }

  selectCarrera(carrera: Carrera){}

}
