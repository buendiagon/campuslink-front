import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { career } from '../home/interfaces/career.interface';
import { CarrerService } from '../services/carrer.service';

@Component({
  selector: 'app-side-content',
  templateUrl: './side-content.component.html',
  styleUrls: ['./side-content.component.scss']
})
export class SideContentComponent implements OnInit {

  selectedId: undefined| number = undefined;

  carreras : career[] = [];

  constructor(
    private carrerService : CarrerService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.carrerService.loadCarrers();

    this.carrerService.carreras.subscribe( resp => {
      this.carreras = resp;
    })

    this.carrerService.selectedId.subscribe( resp => {
      this.selectedId = resp;
    })
    
    }

    select(id: number){
      this.selectedId = id;
      this.router.navigate(['/dashboard/home/career-'+id]);
    }

    goToInitial(){
      this.router.navigate(['/dashboard/home/initial']);
      this.selectedId = undefined;
    }

    goToCreatePublication(){
      this.selectedId = -1;
      this.router.navigate(['/dashboard/create-publication']);
    }


}
