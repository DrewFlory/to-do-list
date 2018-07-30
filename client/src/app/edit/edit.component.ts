import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntriesService } from '../services/entries.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editedTask:Array<any>;

  constructor(private theRouter: ActivatedRoute,
    private myService: EntriesService) { }

  ngOnInit() {
    
  }

  editTask(){
    this.theRouter.params
    .subscribe((params) => {
      this.myService.getOneTask(params['id'])
      .subscribe((theEntryFromService)=>{
        this.editedTask = theEntryFromService
      })
    })
  }

}
