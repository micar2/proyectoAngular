import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  proyectos: any[] = [];
  proyecto = {
    id:null,
    nombre:'',
    completado:false
  }

  constructor(
    private appService: AppService
  ){ }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.appService.getAll().subscribe((data: any) => this.proyectos = data);
  }

  save(){
    if(this.proyecto.id){
      this.appService.update(this.proyecto.id,this.proyecto).subscribe(() => this.getAll());
    }else{
      this.appService.create(this.proyecto).subscribe(() => this.getAll());
    }
    

    this.proyecto = {
      id:null,
      nombre:'',
      completado:false
    }
  }

  edit(proyecto: any){
    this.proyecto = {
      ...proyecto
    }
  }

  delete(proyecto: any){
    this.appService.delete(proyecto.id, proyecto).subscribe(() => this.getAll());
  }
}
