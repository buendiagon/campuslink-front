import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import Swal from 'sweetalert2';
import { career } from '../home/interfaces/career.interface';
import { CreatePublication } from '../interfaces/inputs.interface';
import { CarrerService } from '../services/carrer.service';
import { PublicationsService } from '../services/publications.service';


@Component({
  selector: 'app-make-publication',
  templateUrl: './make-publication.component.html',
  styleUrls: ['./make-publication.component.scss']
})
export class MakePublicationComponent implements OnInit {

  hide = true;

  careers : career[] = []

  filteredOptions!: Observable<career[]>;

  publication = this.fb.group({
    title: ['',[Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    career: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private careerService: CarrerService,
    private publicationsService: PublicationsService
  ) { }
  
  ngOnInit(): void {

    this.careerService.loadCarrers();

    this.careerService.carreras.subscribe( resp => {
      this.careers = resp;
      this.filteredOptions = this.publication.controls['career'].valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    })

    this.validarCarrera();
    
  }

  validarCarrera(){
    this.publication.controls['career'].valueChanges.subscribe( value => {
      if(this.careers.some( career => career.name === value))
      {
        this.publication.controls['career'].setErrors(null);
      }
      else
      {
        this.publication.controls['career'].setErrors({incorrect: true} );
      }
    })
  }

  CrearPublicacion() {
    if(this.publication.invalid) {
      return;
    }

    const publication : CreatePublication = {
      title: this.publication.controls['title'].value,
      description: this.publication.controls['description'].value,
      id_career: this.careers.find( career => career.name === this.publication.controls['career'].value)?.id || 0,
      is_question: true
    }
    
    this.publicationsService.createPublication(publication).subscribe( resp => {
      if(resp)
      {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Publicacion creada.',
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
  }

  private _filter(value: any): career[] {

    const filterValue = value.toLowerCase();

    return this.careers.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
