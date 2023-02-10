import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/interceptors/spinner.service';
import { ShowSpinnerService } from '../../services/show-spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  isloading$ = this.showSpinnerService.isloading$;
 
  constructor(
    private showSpinnerService: ShowSpinnerService
  ) { }
  ngOnInit(): void {
  }

}
