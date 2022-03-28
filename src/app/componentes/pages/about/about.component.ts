import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo: any = "";

  constructor(public infoservice: InfoService) { }

  ngOnInit(): void {
    this.infoservice.getinfoEquipo()
    .subscribe((resp:any) => {
      console.log(resp);
      this.equipo = resp;

    });
    
  }

}
