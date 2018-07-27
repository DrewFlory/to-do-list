import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntriesService } from '../services/entries.service'

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  theActualEntry:any;

  constructor(private theRouter: ActivatedRoute,
    private myService: EntriesService) { }

  ngOnInit() {
    this.theRouter.params
    .subscribe((params) => {
      this.myService.getOneTask(params['id'])
      .subscribe((theEntryFromService)=>{
        this.theActualEntry = theEntryFromService
      })
    })
    }
    deleteTask(){
    this.theRouter.params
    .subscribe((params) => {
      this.myService.deleteTask(params['id'])
      .subscribe((theEntryToDelete)=>{
      })
    })
  }}