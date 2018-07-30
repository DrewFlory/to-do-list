import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  task:Array<any>;

  constructor(private tasks: EntriesService) { }

  ngOnInit() {
  }
  

  getTasks() {
    this.tasks.getTasks()
    .subscribe((task)=> this.task = task);
   }
}
