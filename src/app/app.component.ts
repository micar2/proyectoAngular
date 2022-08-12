import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  proyectos: any[] = [];

  constructor(
    private appService: AppService
  ){ }
  ngOnInit(): void {
    this.appService.getAll().subscribe((data: any) => this.proyectos = data);
  }
}
