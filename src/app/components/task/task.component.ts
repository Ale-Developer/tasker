import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  listTask: Task[] = []
  nameTask = '';
  constructor() { }

  ngOnInit(): void {
  }
  addTask(){
    console.log(this.nameTask)
    // crear objeto task
    const task: Task = {
      nombre: this.nameTask,
      estado: false
    }
    // Agregar objeto task al array
    this.listTask.push(task);
    // Reset form
    this.nameTask = '';
  }

  deleteTask(index: number): void{
    this.listTask.splice(index, 1);
  }

  updateTask(index: number, task: Task): void {
    this.listTask[index].estado = !task.estado
  }
}
