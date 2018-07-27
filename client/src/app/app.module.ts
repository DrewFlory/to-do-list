import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { EntriesService } from './services/entries.service';
import { RouterModule, Routes } from "@angular/router";
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskformComponent } from './taskform/taskform.component';
import { FormsModule } from '@angular/forms'

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'tasks',  component: TaskComponent },
  { path: 'tasks/:id/details',  component: TaskDetailsComponent },
  { path: 'tasks/create', component: TaskformComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDetailsComponent,
    TaskformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [EntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
