import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
listTareas:Tarea[]=[]
nombreTarea='';

constructor(){}

ngOnInit():void{}

agregarTarea(){
  // crear un objeto tarea
const tarea:Tarea={
  nombre:this.nombreTarea,
  estado:false
}

  //agregar objeto al array
this.listTareas.push(tarea);

  //resetear form
  this.nombreTarea = '';
}
}
