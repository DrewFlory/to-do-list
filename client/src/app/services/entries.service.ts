import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EntriesService {

newTaskEntry:any = {
  title: String,
  description: String,
  doneyet: Boolean
};

  constructor(private http: Http) { }

  getTasks() {
    return this.http.get(`http://localhost:3000/api/tasks`)
      .map((res) => res.json());
  }

  getOneTask(entryId){
    return this.http.get('http://localhost:3000/api/tasks/' + entryId + '/details' )
      .map((res) => res.json());
  }

  createTask(newTaskEntry) {
    return this.http.post('http://localhost:3000/api/tasks/create', newTaskEntry )
      .map((res) => res.json());
  }

  deleteTask(deletedTask) {
    return this.http.post('http://localhost:3000/api/tasks/' + deletedTask + '/delete', {} )
    .map((res)=> res.json)
  }
}
