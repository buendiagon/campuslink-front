import { Component, OnInit } from '@angular/core';
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
    private carrerService : CarrerService
  ) { }

  ngOnInit(): void {
    this.carrerService.getCarrers().subscribe((data:career[])=>{
      this.carreras = data;
    })}

}
