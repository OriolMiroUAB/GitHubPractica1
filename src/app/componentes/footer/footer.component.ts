import { Component, OnInit } from '@angular/core';
import { infoPag } from 'src/app/interfaces/infoPag';

import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: any = new Date();

  infoPag: infoPag = {};

  constructor(public infoservice: InfoService) { 
   
  }

  ngOnInit(): void {
    this.infoservice.getinfoPag()
    .subscribe((resp:infoPag) => {
      console.log(resp);
      this.infoPag=resp;

    });
  }

}
