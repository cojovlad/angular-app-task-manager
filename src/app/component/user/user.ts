import {Component, computed, EventEmitter, Input, input, Output} from '@angular/core';

interface Users {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) user!: Users;
  // @Input({required:true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // avatar=input.required<string>();
  // name=input.required<string>();
  @Output() selectedUser = new EventEmitter();

  @Input({required:true}) selected!: boolean;
  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar;
  // })

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser(){
     this.selectedUser.emit(this.user.id);
  }
}
