import { Component } from '@angular/core';
import { Apod } from './models/Apod';
import { ApiNasaService } from './services/api-nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  apod: Apod = {
    title: '',
    date: '',
    url: '',
    resource: '',
    explanation: ''
  };

  constructor(private service: ApiNasaService) { }

  ngOnInit(): void {
    this.service.consultaApod().subscribe(apod => {
      this.apod = apod;
    });
  }
}
