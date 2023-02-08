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
    
    this.isloading$.subscribe((data) => {
      console.log('puta mierda')
    })

    // this.isloading$ = this.spinnerService.isloading$;
    // this.
    // console.log('cambio desde componente')
    // this.spinnerService.hide(); 
  }

}
