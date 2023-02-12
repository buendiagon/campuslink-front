import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, OnInit, Output } from '@angular/core';
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

  @Output() toMakePublication = new EventEmitter<Publication[]>();

  publications  : Publication[] = [];

  showButton = false;

  size = 10;

  page = 0;

  constructor (
    private authServcie : AuthService,
    private publicationService : PublicationsService,
    private urlRouter: ActivatedRoute,
    private router: Router,
    private careerService: CarrerService,
    @Inject(DOCUMENT) private document: Document
    
  ) { }

  @HostListener('window:scroll')

  onWindowScroll() {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;

    this.showButton = (yOffSet || scrollTop) > 500;

  }

  onScrollTop() {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown() {
    if(this.careerService.selectedId.value == -5){
      return
    }
    this.page++;
    
    this.addPublications();

  }

  ngOnInit(): void {

    this.urlRouter.paramMap.subscribe( params => {
      this.page = 0;
      const criterios = params.get('params');
      this.busqueda(criterios || '');
    })

  }  

  busqueda(criterio: string) {
    if(criterio.includes('career-')) {
      const consulta = criterio.split('-')[1]
      this.careerService.selectedId.next(Number(consulta));
      this.publicationService.getPublicationsByCareer(consulta,this.page,this.size).subscribe( (resp: Input) => {
        this.inputs = resp
        this.publications = this.inputs.publications;
      })
    }
    else if(criterio.includes('search-'))
    {
      const consulta = criterio.split('-')[1]
      console.log(consulta)
      this.careerService.selectedId.next(-5);
      this.publicationService.getPublicationsBySearch(consulta).subscribe( (resp: any) => {
        console.log(resp)
        this.publications = resp;
      });
    }
    else{
      this.router.navigate(['/dashboard/home/initial']);
      this.loadAllPublications();
    }
  }

  loadAllPublications(){
    this.careerService.selectedId.next(undefined);
    this.publicationService.getPublications(this.page, this.size).subscribe( (resp: Input) => {
      this.inputs = resp
      this.publications = this.inputs.publications;
    })
  }

  goToCreatePublication(){
    this.router.navigate(['/dashboard/create-publication']);
  }

  addPublications(){
    //añadir publicaciones en una carrera especifica
    if(this.careerService.selectedId.value){
      this.publicationService.getPublicationsByCareer(this.careerService.selectedId.value.toString(),this.page,this.size).subscribe( (resp: Input) => {
        this.inputs = resp
        this.publications.push(...this.inputs.publications);
      })
    }
    else{
      this.publicationService.getPublications(this.page, this.size).subscribe( (resp: Input) => {
        this.inputs = resp
        this.publications.push(...this.inputs.publications);
      })
    }
  }

  
  show(algo:any)
  {
  }
  

}
