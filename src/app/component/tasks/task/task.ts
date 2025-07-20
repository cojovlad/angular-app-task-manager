import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tasks} from '../tasks';

interface Tasksa {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!:Tasksa;
  @Output() completed = new EventEmitter<string>();

  onCompleteTask() {
    this.completed.emit(this.task.id);
  }
}
