import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EntriesService {

newTaskEntry:any = {
  title: String,
  description: String,
  doneyet: Boolean
};

errorMessage:any;

  constructor(private http: Http) { }

  getTasks() {
    return this.http.get(`http://localhost:3000/api/tasks`)
      .map((res) => res.json());
  }

  getOneTask(entryId) {
    return this.http.get('http://localhost:3000/api/tasks/' + entryId + '/details' )
      .map((res) => res.json());
  }

  createTask(newTaskEntry) {
    return this.http.post('http://localhost:3000/api/tasks/create', newTaskEntry )
      .map((res) => res.json());
  }

  deleteTask(deletedTask) {
    return this.http.post('http://localhost:3000/api/tasks/' + deletedTask + '/delete', {} )
    .map((res)=> res.json);
  }

  editTask(editid) {
    return this.http.get('http://localhost:3000/api/tasks/' + editid + '/edit' )
    .map((res)=> res.json);
  }

  handleError(e) {
    this.errorMessage = e.json().message;
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`http://localhost:3000/api/signup`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`http://localhost:3000/api/login`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`http://localhost:3000/api/logout`, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/loggedin`, {withCredentials: true})
      .map((res) => {
        return JSON.parse(res._body)
      })
      .catch(this.handleError);
  }
}
