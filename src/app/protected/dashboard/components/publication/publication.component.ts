import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { CommentsList, Details, Responseslist, CommentsList2 } from '../interfaces/detail.iterface';
import { ComentariosService } from '../services/comentarios.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  idPublication = 0;

  details : Details | null = null;

  showComents: CommentsList[] | CommentsList2[] = [];

  responseList: Responseslist[] = [];

  respuesta = '';

  comentario = '';

  selectedDetailcoment!: number | undefined;

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
      if(this.details?.id != data?.id)
      {
        this.selectedDetailcoment = undefined;
      }
      this.details = data;
      console.log(this.details)
      this.responseList = this.details?.responseslist || [];
      if(this.selectedDetailcoment == undefined){
        this.selectedDetailcoment = this.details?.id || undefined;
        this.showComents = this.details?.commentsList || [];
      }
      else{
        if(this.idPublication == this.selectedDetailcoment){
          this.showComents = this.details?.commentsList || [];
        }
        else{
          this.showComents = this.responseList.find((item: any) => item.id == this.selectedDetailcoment)?.commentsList || [];
        }
      }
      this.score = this.details?.score || 0;
    });
  }

  sendResponse(){
    if(this.respuesta.length > 0){
      const body = {
        id_parent: this.details?.id,
        title: '',
        description: this.respuesta,
        id_career: this.details?.id_career,
        is_question: false,
      }
      this.comentarioService.createResponse(body).subscribe((data: any) => {
        this.respuesta = '';
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 500
        })

        this.comentarioService.setDetails(this.idPublication);
      });
    }
  }

  loadComents(comentarios : any, id:any){
    this.showComents = comentarios;
    this.selectedDetailcoment = id;
  }

  sendBadScore(id: any){

    const body = {
      id_input: id,
      is_positive: false,
    }

    this.comentarioService.createRate(body).pipe(
      finalize(() => {
        this.comentarioService.setDetails(this.idPublication);
      })
    ).subscribe();
  }

  sendGoodScore(id: any){
    const body = {
      id_input: id,
      is_positive: true,
    }

    this.comentarioService.createRate(body).pipe(
      finalize(() => {
        this.comentarioService.setDetails(this.idPublication);
      })
    ).subscribe();

  }

  sendComment(){
    const body = {
      id_input: this.selectedDetailcoment,
      description: this.comentario,
    }

    console.log(body);

    this.comentarioService.createComment(body).subscribe((data: any) => {
      this.comentario = '';
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 500
      })

      this.comentarioService.setDetails(this.idPublication);
    }
    );
  }

  mostrarRed(entrada: any): string{
    
    if(entrada == true){
      return 'red';
    }

    if(entrada == false){
      return 'blue';
    }

      return '';

  }

}
