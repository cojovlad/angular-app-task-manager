import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import {NewTask} from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTasks() {
    return this.dummyTasks.filter(task => task.userId === this.userId);
  }
  onCompleteTask(id: string) {
    this.dummyTasks = this.dummyTasks.filter(task => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: {title: string, summary: string, date: string}) {
    this.dummyTasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.isAddingTask = false;
  }
}
