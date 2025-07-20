import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {bootstrapApplication} from '@angular/platform-browser';
import {HeaderComponent} from './component/Header/HeaderComponent';
import {User} from './component/user/user';
import {DUMMY_USERS} from '../assets/dummy-users';
import {Tasks} from './component/tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users=DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onSelectedUser(id: string){
    this.selectedUserId = id;
  }
}
