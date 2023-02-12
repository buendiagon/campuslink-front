import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from '../../../interfaces/inputs.interface';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {


  @Input() publication!: Publication;
  content: string = '';
  title: string = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {


    this.content = this.publication.description || '';

    this.title = this.publication.title || '';

  }


  goToPublication(){
    this.router.navigate(['/dashboard/publication', this.publication.id]);
  }


}
