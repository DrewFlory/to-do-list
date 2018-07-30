import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { EntriesService } from './services/entries.service';
import { RouterModule, Routes } from "@angular/router";
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskformComponent } from './taskform/taskform.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks',  component: TaskComponent },
  { path: 'tasks/:id/details',  component: TaskDetailsComponent },
  { path: 'tasks/create', component: TaskformComponent },
  { path: 'tasks/:id/edit', component: TaskformComponent },
  { path: 'signup', component: UserComponent },
  { path: 'login', component: UserComponent },
  { path: 'logout', component: UserComponent},
  { path: 'loggedin', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDetailsComponent,
    TaskformComponent,
    EditComponent,
    UserComponent,
    HomeComponent
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
