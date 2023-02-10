import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Input, Publication } from '../interfaces/inputs.interface';
import { CarrerService } from '../services/carrer.service';
import { PublicationsService } from '../services/publications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputs! : Input;

  publications!: Publication[];

  constructor (
    private authServcie : AuthService,
    private publicationService : PublicationsService,
    private urlRouter: ActivatedRoute,
    private router: Router,
    private careerService: CarrerService
    
  ) { }

  ngOnInit(): void {

    this.urlRouter.paramMap.subscribe( params => {
      const criterios = params.get('params');
      this.busqueda(criterios || '');
    })

  }  

  busqueda(criterio: string) {
    if(criterio.includes('career-')) {
      const consulta = criterio.split('-')[1]
      this.careerService.selectedId.next(Number(consulta));
      this.publicationService.getPublicationsByCareer(consulta).subscribe( (resp: Input) => {
        this.inputs = resp
        this.publications = this.inputs.publications;
      })
    }
    else{
      this.router.navigate(['/dashboard/home/initial']);
      this.loadAllPublications();
    }
  }

  loadAllPublications(){
    this.publicationService.getPublications(0, 10).subscribe( (resp: Input) => {
      this.inputs = resp
      this.publications = this.inputs.publications;
    })
  }

  goToCreatePublication(){
    this.router.navigate(['/dashboard/create-publication']);
  }

  

}
