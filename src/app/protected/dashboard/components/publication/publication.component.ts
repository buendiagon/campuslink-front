import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsList, Details, Responseslist } from '../interfaces/detail.iterface';
import { ComentariosService } from '../services/comentarios.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  idPublication = 0;

  details : Details | null = null;

  showComents: CommentsList[] = [];

  responseList: Responseslist[] = [];

  score = 0;

  constructor(
    private urlRoute: ActivatedRoute,
    private comentarioService: ComentariosService
  ) { }

  ngOnInit(): void {
    this.urlRoute.paramMap.subscribe((params: any) => {
      this.idPublication = params.get('id');
      this.comentarioService.setDetails(this.idPublication);
    });

    this.comentarioService.details.subscribe((data: any) => {
      this.details = data;
      console.log(this.details);
      this.showComents = this.details?.commentsList || [];
      console.log(this.showComents);
      this.score = this.details?.score || 0;
      this.responseList = this.details?.responseslist || [];
    });
  }

  loadComents(comentarios : any){
    this.showComents = comentarios;
    console.log(this.showComents)
  }

}
