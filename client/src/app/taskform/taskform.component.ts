import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {

  constructor(private tasks: EntriesService) { }

  ngOnInit() {
  }

  newEntryStuff:any = {}

  createTask(){
    this.tasks.createTask(this.newEntryStuff)
    .subscribe((entry)=>{
      
    })
  }

}
