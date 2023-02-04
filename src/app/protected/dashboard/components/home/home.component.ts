import { Component, EventEmitter, Output } from '@angular/core';
import { Publication } from './interfaces/publication.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  publications: Publication[] = [
    {
      id: '1',
      userName: 'Juan',
      title: 'Titulo 1',
      description: 'Descripcion 1',
      image: 'https://picsum.photos/200/300',
      created_at: new Date(),
      principalcarrer: 'Ingenieria'
    },
    {
      id: '2',
      userName: 'Pedro',
      title: 'Titulo 2',
      description: 'Descripcion 2',
      image: 'https://picsum.photos/200/300',
      created_at: new Date(),
      principalcarrer: 'Ingenieria'
    },
    {
      id: '3',
      userName: 'Maria',
      title: 'Titulo 3',
      description: 'Descripcion 3',
      image: 'https://picsum.photos/200/300',
      created_at: new Date(),
      principalcarrer: 'Ingenieria'
    },
    {
      id: '4',
      userName: 'Jose',
      title: 'Titulo 4',
      description: 'Descripcion 4',
      image: 'https://picsum.photos/200/300',
      created_at: new Date(),
      principalcarrer: 'Ingenieria'
    },
    {
      id: '5',
      userName: 'Luis',
      title: 'Titulo 5',
      description: 'Descripcion 5',
      image: 'https://picsum.photos/200/300',
      created_at: new Date(),
      principalcarrer: 'Ingenieria'
    }
  ]

  

}
