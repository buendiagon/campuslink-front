import { Component, Input, OnInit } from '@angular/core';
import { Publication } from '../../../interfaces/inputs.interface';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {


  @Input() publication!: Publication;
  content: string = '';

  ngOnInit(): void {

    console.log(this.publication)
    this.content = this.publication.description;

  }


}
